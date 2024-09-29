import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { GeistSans } from 'geist/font/sans';
import Head from "next/head"
import RenderFooter from '../app/components/FooterComponent'
import RenderHeader from '../app/components/HeaderComponent'
import { MarkdownToHtml } from '../app/utils/MarkDownConvert'

import { DateToString, FormatNumber } from '../app/utils/Util'
import '../css/index.css'
import 'react-toastify/dist/ReactToastify.css';

function HeadProp({ json }) {
    return (
        <Head>
            <title>{`${json?.name} - Millennium`}</title>
            <meta name="description" content={json.description} />
            <meta property="og:title" content={`${json.name} - Millennium`}/>
            <meta property="og:description" content={json.description}/>
            <meta property="og:image" content={json?.header_image}/>
            <meta property="og:image:alt" content="theme Thumbnail"/>
            <meta property="og:image:width" content="1920"/>
            <meta property="og:image:width" content="1080"/>
            <meta name="description" content={json.description}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:title" content={`${json.name} - Millennium`}/>
            <meta property="twitter:description" content={json.description}/>
            <meta property="twitter:image" content={json?.header_image}/>
            <meta property="twitter:image:alt" content="theme Thumbnail"/>
            <meta property="og:site_name" content="Millennium"/>
            <meta property="twitter:site" content="Millennium"/>
            <meta name="theme-color" content="#3a71c1"/>
            
            <meta name="author" content={json.author ?? "Anonymous"}/>
        </Head>
    )
} 

export const getServerSideProps = (async (context) => {

    const res = await fetch(`https://steambrew.app/api/v2/details/` + context.query.id)
    const json = await res.json()

    const readme = json?.read_me
    const markdown = await MarkdownToHtml(readme);

    const isSteamClient = /Valve Steam Client/.test(context.req.headers['user-agent']);

    return { 
        props: { 
            json, markdown, isSteamClient
        } 
    }
})

export default function Home({ json, markdown, isSteamClient }) 
{
    const [isMillenniumConnected, setIsMillenniumConnected] = useState(false);
    const [isThemeInstalled, setIsThemeInstalled] = useState(false);
    const [millenniumIPC, setMillenniumIPC] = useState(null);

    const GetThemeStatus = (millenniumIPC) => {
        millenniumIPC.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);

            console.log(`theme is installed ? ${data.data}`);

            if (data.type === 'checkInstall') {
                setIsThemeInstalled(data.data);
            }
        })
        millenniumIPC.send(JSON.stringify({ type: 'checkInstall', data: { 
            owner: json?.data?.github?.owner,
            repo: json?.data?.github?.repo
        } }));

    };

    const EstablishConnection = () => {
        const millenniumIPC = new WebSocket('ws://localhost:9123');
        setMillenniumIPC(millenniumIPC);
    
        millenniumIPC.onopen = () => {
            setIsMillenniumConnected(true)
            GetThemeStatus(millenniumIPC);
        };

        millenniumIPC.onerror = () => {
            toast.warn("You're currently in view mode. To install this theme you must have Millennium installed with Steam open.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setIsMillenniumConnected(false)
        };
    };

    useEffect(() => { EstablishConnection() }, []);

    const InstallTheme = () => {
        setTimeout(() => {
            millenniumIPC.send(JSON.stringify({ 
                type: 'installTheme', 
                data: { 
                    repo: json?.data?.github?.repo, 
                    owner: json?.data?.github?.owner 
                } 
            }));
        }, 2000)

        return new Promise((resolve, reject) => {
            millenniumIPC.addEventListener('message', (event) => {
                const data = JSON.parse(event.data);

                if (data.type === 'installTheme') {
                    if (data.data) {
                        resolve(true);
                    } else {
                        reject(false);
                    }
                    GetThemeStatus(millenniumIPC);
                }
            });
        });
    }

    const startDownload = () => {
        toast.promise(InstallTheme(), {
            pending: `Downloading and Installing ${json.name}. This may take a moment...`,
            success: `Successfully installed!`,
            error: `Failed to install ${json.name}`,   
        });
    }

    const UninstallTheme = () => {
        setTimeout(() => {
            millenniumIPC.send(JSON.stringify({ 
                type: 'uninstallTheme', 
                data: { 
                    repo: json?.data?.github?.repo, 
                    owner: json?.data?.github?.owner 
                } 
            }));
        }, 2000)

        return new Promise((resolve, reject) => {
            millenniumIPC.addEventListener('message', (event) => {
                const data = JSON.parse(event.data);
                if (data.type === 'uninstallTheme') {
                    data.data ? resolve(true) : resolve(false);
                    GetThemeStatus(millenniumIPC);
                }
            });
        });
    }

    const startUninstall = () => { 
        toast.promise(UninstallTheme(), {
            pending: `Uninstalling ${json.name}...`,
            success: `Successfully uninstalled!`,
            error: `Failed to uninstall theme ${json.name}`,   
        });
    }

  return (
    <div className={GeistSans.className}>
    <HeadProp json={json} />
    <div className="os-resize-observer-host observed">
      <div className="os-resize-observer"></div>
    </div>
    <div className={`os-padding ${GeistSans.className}`}>
        <div className="os-content">
          <div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
          <div className="vm-placement" id="vm-av" data-format="isvideo"></div>
          {!isSteamClient && <RenderHeader/>}
          <section id="main-page-content">
          <section id="addon-details" className="page-section">
          <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                className={GeistSans.className}
            />
              <div className="page-section-inner theme-view-panel">
              <img loading="lazy" src={json?.splash_image} className="addon-backdrop"/>
              <div className="flex-container align-center justify-between" id="addon-details-title">
                  <div className="disabled sign-in-gate">
                  </div>
              </div>
              <div className="flex-container" id="addon-splitview-container">
              <div className="addon-details-column" id="addon-details-right-column">
                  <div className="addon-details-segment" id="addon-details-column-actions">
                    <a className="link_link__hbWKh link_secondary__F1rqx" href="/themes"><small>← Back to Themes</small></a>
                    <a target="_blank" href={`https://github.com/${json?.data?.github?.owner}`} className="addon-author-container">
                        <img loading="lazy" src={`https://github.com/${json?.data?.github?.owner}.png`}/>
                        <h5>{json?.data?.github?.owner}</h5>
                    </a>
                    <h1 className="title">{json?.name ?? json?.data?.github?.repo}</h1>
                    <div className="title-description theme-desc">
                        {json?.description}
                    </div>
                      <section id="addon-actions">
                      <div className="btn-container direction-column">
                          <div className='wrap-buttons'>
                          {isMillenniumConnected && (

                            !isThemeInstalled ? 
                                <a onClick={_ => startDownload()} className="btn btn-primary" id='download-btn'>
                                    <img height={"16px"} width={"16px"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAg0lEQVR4nO2UOwqAMBBE3zWsLCxsLLSw8vYGPYSghYVgIR4hErAQ/58EQfNgIBCYIRN24U9kgBwlTATImWzAAmkr+l5F1Yrplso7ATHQnTDvgeTuKyKg3TFXdyEP8YF6xbwBAjThAsXEXP2Ph2YcIB+3qjpb9CMuDJY8kDAdkBoo4CUG+aZ0PJTVTQsAAAAASUVORK5CYII="/>
                                    <span draggable>Install</span>
                                </a>  
                            :
                            <a onClick={_ => startUninstall()} className="btn btn-primary" id='uninstall-btn'>
                                <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48">
                                    <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z"></path>
                                </svg>
                                <span draggable>Uninstall</span>
                            </a>)  
                          }
                          <a rel="noreferrer noopener" target="_blank" href={`https://github.com/${json?.data?.github?.owner}/${json?.data?.github?.repo}/`} className="btn btn-secondary" id="view-source">
                              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                  <path fillRule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                              </svg>
                              <span>View Source</span>
                          </a>
                          </div>
                          {json?.skin_data?.funding?.kofi && <a href={`https://ko-fi.com/${json?.skin_data?.funding?.kofi}`} className="btn btn-primary" id="kofi-btn">
                            <img id="kofi-icon" src={"https://raw.githubusercontent.com/DeybisMelendez/godot-kofi-button/master/addons/kofi-donation-button/logo.png"}></img>
                            <span draggable="true">Support me on Ko-fi</span>
                          </a>}
                      </div>
                      </section>

                      <section id="about-addon">
                      <span className="addon-metadata-row">
                          <strong>Version: </strong> {json?.version} </span>
                      <span className="addon-metadata-row">
                          <strong>Downloads: </strong> {FormatNumber(json?.data?.download)} </span>
                      <span className="addon-metadata-row">
                          <strong>Added: </strong>{json?.data?.create_time && DateToString(json?.data?.create_time)} </span>
                      <span className="addon-metadata-row">
                          <strong>Last Updated: </strong>{json?.commit_data?.committedDate && DateToString(json?.commit_data?.committedDate)} </span>
                      <span className="addon-metadata-row">
                          <strong>Id: </strong>{json?.data?.id}</span>
                      <span className="addon-metadata-row">
                          <strong>Source: </strong>
                          <a rel="noreferrer noopener" target="_blank" className="anchor" href={`https://github.com/${json?.data?.github?.owner}/${json?.data?.github?.repo}/`}>{`https://github.com/${json?.data?.github?.owner}/${json?.data?.github?.repo}/`}</a>
                      </span>
                      </section>
                  </div>

                  {/* Render Discord server invite link if there is one provided */}
                  {!json?.discord ? <></> :         
                      <div className="addon-details-segment" id="addon-details-column-server">
                          <section id="addon-server">
                          <div className="flex-container align-center">
                              <img loading="lazy" src={json?.discord?.icon}/>
                              <div className="flex-container justify-center direction-column">
                              <h5>{json?.discord?.name}</h5>
                              <p>Support Server</p>
                              </div>
                          </div>
                          <a rel="noreferrer noopener" target="_blank" className="btn btn-primary btn-join-server" href={json?.discord?.link ?? "#"}>
                              <span>Join Server</span>
                          </a>
                          </section>
                      </div>
                  }     
                  {/* Render Tags if there are any */}
                  {json?.tags?.length ? 
                      <div className="addon-details-segment" id="addon-details-column-tags">
                          <h3 className="addon-details-section-header">Tags</h3>
                          <section>
                          <div className="addon-tags">
                              {json?.tags?.map((tag, index) => (
                                  <span key={index} className="addon-tag">
                                      {tag}
                                  </span>
                              ))}
                          </div>
                          </section>
                      </div> : <></>
                  }
                  </div>
                  <div className="addon-details-column" id="addon-details-left-column">
                      <article className="addon-details-segment markdown-readme-content">
                          <div className="markdown-body">
                              <div dangerouslySetInnerHTML={{ __html: markdown }} />
                          </div>
                      </article>
                  </div>           
              </div>
              </div>
          </section>
          </section>
          {!isSteamClient && <RenderFooter/>}
        </div>
      </div>
    </div>
  );
}
