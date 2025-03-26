'use client';

function CreateCard(item) {
	const data = item.data;

	function formatNumber(number) {
		if (number >= 1000) {
			const formattedNumber = (number / 1000).toFixed(1);
			return `${formattedNumber}K`;
		} else {
			return number.toString();
		}
	}

	const openPopup = () => {
		window.location.href = `/plugin?id=${data.id}`;
	};

	return (
		<>
			<a className="card-wrap" onClick={openPopup}>
				<div className="card">
					<div className="card-body">
						<h3 className="card-title">{data?.pluginJson?.common_name}</h3>
						<p className="card-description package-description">{data?.pluginJson?.description}</p>
						<div className="card-footer">
							<div className="card-stats">
								<div className="card-stat" id="addon-likes">
									<div className="pfp-name">
										<p className="card-subtext package-author">by {data?.repoOwner}</p>

										<a target="_blank" className="addon-author-container">
											<img loading="lazy" src={`https://github.com/${data?.repoOwner}.png`} />
										</a>
									</div>
									<div className="tt-plugin-download-count" role="link">
										<svg style={{ color: 'currentColor', width: '20px', height: '20px' }} className="package-stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
											<path
												fillRule="evenodd"
												d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"
											></path>
										</svg>
										<span className="downloadTagText">{(data?.downloadCount && formatNumber(data?.downloadCount)) ?? 'none'}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		</>
	);
}

export default CreateCard;
