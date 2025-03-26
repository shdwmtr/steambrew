import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Head from 'next/head';
import RenderFooter from '@/components/FooterComponent';
import RenderHeader from '@/components/HeaderComponent';
import { MarkdownToHtml } from '@/utils/MarkDownConvert';

import { DateToString, FormatNumber, FormatBytes } from '@/utils/Util';
import '@/css/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { API_URL } from '@/utils/globals';
import { Tooltip } from 'react-tooltip';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function HeadProp({ json, apiError }) {
	if (apiError) {
		return (
			<Head>
				<title>Whoops! - Millennium</title>
				<meta name="description" content="It seems the API is unreachable..." />
			</Head>
		);
	}

	let name = json?.pluginJson?.common_name ?? json?.repoName;

	if (name.length > 15) {
		name = name.substring(0, 15) + '...';
	}

	return (
		<Head>
			<title>{`${name} - Millennium`}</title>
			<meta name="description" content={json.description} />
			<meta property="og:title" content={`${json?.pluginJson?.common_name} - Millennium`} />
			<meta property="og:description" content={json.description} />
			<meta property="og:image" content={json?.thumbnail} />
			<meta property="og:image:alt" content="theme Thumbnail" />
			<meta property="og:image:width" content="1920" />
			<meta property="og:image:width" content="1080" />
			<meta name="description" content={json.description} />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:title" content={`${json?.pluginJson?.common_name} - Millennium`} />
			<meta property="twitter:description" content={json.description} />
			<meta property="twitter:image" content={json?.thumbnail} />
			<meta property="twitter:image:alt" content="Theme Thumbnail" />
			<meta property="og:site_name" content="Millennium" />
			<meta property="twitter:site" content="Millennium" />
			<meta name="theme-color" content="#3a71c1" />

			<meta name="author" content={json.repoOwner ?? 'Anonymous'} />
		</Head>
	);
}

export const getServerSideProps = async (context) => {
	const isSteamClient = /Valve Steam Client/.test(context.req.headers['user-agent']);

	try {
		console.log(API_URL + `/api/v1/plugin/` + context.query.id);
		const response = await fetch(API_URL + `/api/v1/plugin/` + context.query.id);
		const pluginData = await response.json();

		if (response.status === 404) {
			return {
				redirect: {
					destination: '/404',
					permanent: false,
				},
			};
		}

		pluginData.readMeMarkdown = await MarkdownToHtml(pluginData?.readme, pluginData?.repoOwner, pluginData?.repoName);

		return {
			props: { pluginData, isSteamClient, apiError: false },
		};
	} catch (error) {
		console.error('An error occurred while fetching plugin data:', error);

		return {
			props: { pluginData: null, isSteamClient, apiError: true },
		};
	}
};

const RenderAPIError = () => {
	return (
		<div>
			<div className="os-resize-observer-host observed">
				<div className="os-resize-observer"></div>
			</div>
			<div className={`os-padding`}>
				<div className="os-content">
					<div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
					<div className="vm-placement" id="vm-av" data-format="isvideo"></div>
					<RenderHeader />
					<section id="main-page-content">
						<div className="page-section-inner theme-view-panel api-error">
							<div className="api-error-container">
								<h1>Whoops! 😅</h1>
								<p>We're having issues contacting our servers, check back later!</p>
							</div>
						</div>
					</section>
					<RenderFooter />
				</div>
			</div>
		</div>
	);
};

export default function Home({ pluginData, isSteamClient, apiError }) {
	const startDownload = () => {
		window.open(API_URL + pluginData?.downloadUrl, '_blank');

		toast.info(
			<div>
				To install this plugin extract it to your plugins folder. <br />
				For most users this is located at: <br />
				<code>C:\Program Files (x86)\Steam\plugins</code> &nbsp;
			</div>,
			{
				position: 'bottom-right',
				autoClose: 15000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			},
		);
	};

	if (apiError) {
		return <RenderAPIError />;
	}

	useEffect(() => {
		Fancybox.bind('[data-fancybox]', {
			Images: {
				Panzoom: {
					maxScale: 2,
				},
			},
			Thumbs: {
				type: 'classic',
			},
		});
	}, []);

	return (
		<div>
			<HeadProp json={pluginData} apiError={apiError} />
			<div className="os-resize-observer-host observed">
				<div className="os-resize-observer"></div>
			</div>
			<div className={`os-padding`}>
				<div className="os-content">
					<div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
					<div className="vm-placement" id="vm-av" data-format="isvideo"></div>
					{!isSteamClient && <RenderHeader />}
					<section id="main-page-content">
						<section id="addon-details" className="page-section">
							<ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
							<div className="page-section-inner theme-view-panel">
								<img loading="lazy" src={pluginData?.splash_image} className="addon-backdrop" />
								<div className="flex-container align-center justify-between" id="addon-details-title">
									<div className="disabled sign-in-gate"></div>
								</div>
								<div className="flex-container" id="addon-splitview-container">
									<div className="addon-details-column" id="addon-details-right-column">
										<div className="sticky-container">
											<div className="addon-details-segment" id="addon-details-column-actions">
												<a className="link_link__hbWKh link_secondary__F1rqx" href="/plugins">
													<small>← Back to Plugins</small>
												</a>
												<a target="_blank" href={`https://github.com/${pluginData?.repoOwner}`} className="addon-author-container">
													<img loading="lazy" src={`https://github.com/${pluginData?.repoOwner}.png`} />
													<h5>{pluginData?.repoOwner}</h5>
												</a>
												<h1 className="title">{pluginData?.pluginJson?.common_name ?? pluginData?.repoName}</h1>
												<div className="title-description theme-desc">{pluginData?.description}</div>
												<section id="addon-actions">
													<div className="btn-container direction-column">
														<div className="wrap-buttons">
															{pluginData?.hasValidBuild ? (
																<a onClick={(_) => startDownload()} className="btn btn-primary" id="download-btn">
																	<img
																		height={'16px'}
																		width={'16px'}
																		src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAg0lEQVR4nO2UOwqAMBBE3zWsLCxsLLSw8vYGPYSghYVgIR4hErAQ/58EQfNgIBCYIRN24U9kgBwlTATImWzAAmkr+l5F1Yrplso7ATHQnTDvgeTuKyKg3TFXdyEP8YF6xbwBAjThAsXEXP2Ph2YcIB+3qjpb9CMuDJY8kDAdkBoo4CUG+aZ0PJTVTQsAAAAASUVORK5CYII="
																	/>
																	<span draggable>Download</span>
																</a>
															) : (
																<>
																	<a data-tooltip-id="not-available-tooltip" className="btn btn-primary not-available" id="download-btn">
																		<img
																			height={'16px'}
																			width={'16px'}
																			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQUlEQVR4nO2az0tUURTHP5QVqDlW46KC+gNatKll/g+VpBLRNpXauenXojELgnJXLSQkolIqN62KrEVpP5dWtCqylAo1ikQw48J5cTi8cd6bue+9WcwXLowz95zzvtx7zz3n+4QaaqghTbQAbUAfMAI8Bl7JcJ+H5bf9QJ4qQzPQA0wAf4HliMPNHQe6gVzWBPqB+RgPX2zMyUrl0iZxEJgu8lCfgBvACeAQsA9oB44BBeCOPHiY7VegMw0CjcD1kAf4BpwHdkT0UwfsAS4DCyH+hoCGJA/ySxPwJ9BbYdAtwEVg0fh+ITG9wjl8awI9ALZ6jLELeGdiTPok0xiyEueAVSSTQGZMrOdAvQ/n9ky4rZQE1gKjRZLANR/Zya5EWiRmzN8d5TpvAr4oR4+A1fjHGuCeeej7wEZzZqZl68VGv8lOPg/2SisxKt877DbZzF2asdBsLq3eDEgEGDAVQKzbv0cZf5fMlcZ2WhcydzPwR83rihNoQhm6GzuLldC4quY+IyJaTBUbtexIioRDq5q/FLUFaFNGH8meRLAV9Zl1/UxJ9CkDV8VmTSLAXWXrquiSGFEGrhSvBhL2OrhNBDxRBq6fqAYSSD8T+HBtc0m8UQZ7SSfFRkG78vM6LpEDVUIC6TRjEdFb6yjZbieNw3G31nAFtU1SJBxOK5+3iICCMnBCQTWQcLip/J4h5oU4J0JB1iQcPivf7ryURF7KgMDIqR1Zk9hpSpRNUQ3HleGVjEk4XFD+n1JmGb9QpKlKIsWGoVF0syDGEWIgZ4o0pztlsRIOJ1WM2XJkVV08LorulDaJbcCvuNkqTHyYUk4+iCCQxnZCdLOHRhcuW+TuLCHRJLUSDpdMrHLLpf8YMg7TIHHcxBr04bRBBGW7Mhvwj7qQlZjwJZkGffykCfBedCdf2C7FoI4xmcQrurwIyssmmw1UKN6tlxT7O2QlEnvPWC+Csj0vCyLZtEaszYKyw93YP0L8DfrcTiuhw+jCesxLij4r7Wm7qB6unzglVaxO63pM+chOcZGTkr/Y+8A4Y1Yuu6a0SVhC3aIA6qq51FiSArAr69fTYchLr1AQyWZM/cPAmHxXkDmRS/EaaqiBivEPQsfo+NRUoKsAAAAASUVORK5CYII="
																			alt="cancel-2"
																		/>
																		<span draggable>Not Available</span>
																	</a>
																	<Tooltip id="not-available-tooltip" effect="solid" place="bottom-start" type="error" className="tooltip">
																		<h3>Whoops!</h3>
																		<hr></hr>
																		<span>It appears that Millennium doesn't have any builds for this plugin.</span>
																		<br></br>
																		<span>Check back later or contact the developer for more information.</span>
																	</Tooltip>
																</>
															)}
															<a
																rel="noreferrer noopener"
																target="_blank"
																href={`https://github.com/${pluginData?.repoOwner}/${pluginData?.repoName}/tree/${pluginData?.commitId}`}
																className="btn btn-secondary"
																id="view-source"
															>
																<svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
																	<path
																		fillRule="evenodd"
																		d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
																	></path>
																</svg>
																<span>View Source</span>
															</a>
														</div>
														<div data-tooltip-id="verified-plugin-tooltip" className="verified-plugin">
															<img
																src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBklEQVR4nO3WP2pCQRDH8XkXEFKlsPMM4kx23kE8gaQPpEz6NELAg4hg46wWFjapLTxI2g0WERQS/z10Bn4f2OY1y5dh9y0RAAAAxPNk3E+Zh/Ws26GoksmrZinblbIsKHqEbpfJmKJHpCwbMWlTJGr8gggPFJNwQjEJJzAJLzAJLzCJU9RzHqjxd8o86U17LYr6ANQs690GJqumY272ik0m73sbNRhz26d4oUqNPw9ivupl/RDvYJdmY+57O5VmYnxcseW6GB8RV8b4irgwxmfEmTG+I06MiRHxq1CVTEaHP81k8hYn4p/JxIs4EhMr4o+YmBH7Z+ZZjT/Y+HH3HQAAAOgufgB9P/OIv/0V+gAAAABJRU5ErkJggg=="
																alt="checkmark--v1"
															/>
															<span>Verified by Millennium developers</span>
														</div>
														<Tooltip id="verified-plugin-tooltip" effect="solid" place="bottom-start" type="error" className="tooltip">
															<span>This plugin is continuously audited to ensure its safety.</span>
														</Tooltip>
														{pluginData?.skin_data?.funding?.kofi && (
															<a href={`https://ko-fi.com/${pluginData?.skin_data?.funding?.kofi}`} className="btn btn-primary" id="kofi-btn">
																<img id="kofi-icon" src={'https://raw.githubusercontent.com/DeybisMelendez/godot-kofi-button/master/addons/kofi-donation-button/logo.png'}></img>
																<span draggable="true">Support me on Ko-fi</span>
															</a>
														)}
													</div>
												</section>

												<section id="about-addon">
													<span className="addon-metadata-row">
														<strong>Size: </strong> {FormatBytes(pluginData?.fileSize)}{' '}
													</span>
													<span className="addon-metadata-row">
														<strong>Stargazers: </strong> {FormatNumber(pluginData?.stargazerCount)}{' '}
													</span>
													<span className="addon-metadata-row">
														<strong>Downloads: </strong> {FormatNumber(pluginData?.downloadCount)}{' '}
													</span>
													<span className="addon-metadata-row">
														<strong>Last Updated: </strong>
														{pluginData?.commitDate && DateToString(pluginData?.commitDate)}{' '}
													</span>
													<span className="addon-metadata-row">
														<strong>Id: </strong>
														{pluginData?.id}
													</span>
													<span className="addon-metadata-row">
														<strong>Source: </strong>
														<a
															rel="noreferrer noopener"
															target="_blank"
															className="anchor"
															href={`https://github.com/${pluginData?.repoOwner}/${pluginData?.repoName}/tree/${pluginData?.commitId}`}
														>{`https://github.com/${pluginData?.repoOwner}/${pluginData?.repoName}/tree/${pluginData?.commitId}`}</a>
													</span>
												</section>
											</div>

											{/* Render Discord server invite link if there is one provided */}
											{!pluginData?.discord ? (
												<></>
											) : (
												<div className="addon-details-segment" id="addon-details-column-server">
													<section id="addon-server">
														<div className="flex-container align-center">
															<img loading="lazy" src={pluginData?.discord?.icon} />
															<div className="flex-container justify-center direction-column">
																<h5>{pluginData?.discord?.name}</h5>
																<p>Support Server</p>
															</div>
														</div>
														<a rel="noreferrer noopener" target="_blank" className="btn btn-primary btn-join-server" href={pluginData?.discord?.link ?? '#'}>
															<span>Join Server</span>
														</a>
													</section>
												</div>
											)}
											{/* Render Tags if there are any */}
											{pluginData?.tags?.length ? (
												<div className="addon-details-segment" id="addon-details-column-tags">
													<h3 className="addon-details-section-header">Tags</h3>
													<section>
														<div className="addon-tags">
															{pluginData?.tags?.map((tag, index) => (
																<span key={index} className="addon-tag">
																	{tag}
																</span>
															))}
														</div>
													</section>
												</div>
											) : (
												<></>
											)}
										</div>
									</div>
									<div className="addon-details-column" id="addon-details-left-column">
										<article className="addon-details-segment markdown-readme-content">
											<div className="markdown-body">
												<div dangerouslySetInnerHTML={{ __html: pluginData?.readMeMarkdown }} />
											</div>
										</article>
									</div>
								</div>
							</div>
						</section>
					</section>
					{!isSteamClient && <RenderFooter />}
				</div>
			</div>
		</div>
	);
}
