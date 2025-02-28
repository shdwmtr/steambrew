import '../css/index.css'

import RenderFooter from '../app/components/FooterComponent'
import RenderHeader from '../app/components/HeaderComponent'
import Head from "next/head"

import { fluenty } from '../app/components/fluenty/RenderFluenty'
import { useEffect } from 'react';

import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export async function getServerSideProps(context) {
    const isSteamClient = /Valve Steam Client/.test(context.req.headers['user-agent']);
    return {
        props: {
            isSteamClient,
        },
    };
}

export default function FluentyViewModal({ isSteamClient }) {
    useEffect(() => { 
        Fancybox.bind("[data-fancybox]", {
			Images: {
                Panzoom: {
                    maxScale: 2
                }
            },
            Thumbs: {
                type: 'classic'
            },
		})
    }, []);

    return (
        <div>
            <Head>
                <title>{`Fluenty - Millennium`}</title>
                <meta name="description" content={fluenty.description} />
                <meta property="og:title" content={`Fluenty - Millennium`}/>
                <meta property="og:description" content={fluenty.description}/>
                <meta property="og:image" content={"https://i.imgur.com/ca6ncMp.gif"}/>
                <meta property="og:image:alt" content="theme Thumbnail"/>
                <meta property="og:image:width" content="1920"/>
                <meta property="og:image:width" content="1080"/>
                <meta name="description" content={fluenty.description}/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content={`Fluenty - Millennium`}/>
                <meta property="twitter:description" content={fluenty.description}/>
                <meta property="twitter:image" content={"https://i.imgur.com/ca6ncMp.gif"}/>
                <meta property="twitter:image:alt" content="theme Thumbnail"/>
                <meta property="og:site_name" content="Millennium"/>
                <meta property="twitter:site" content="Millennium"/>
                <meta name="theme-color" content="#3a71c1"/>

                <meta name="author" content={"Millennium"}/>
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet" />
          </Head>
            <div className="os-resize-observer-host observed">
            <div className="os-resize-observer"></div>
            </div>
            <div className="os-padding">
                <div className="os-content">
                <div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
                <div className="vm-placement" id="vm-av" data-format="isvideo"></div>
                {!isSteamClient ? <RenderHeader/> : <></>}
                <section id="main-page-content">
                <section id="addon-details" className="page-section">
                    <div className="page-section-inner theme-view-panel">
                    <img loading="lazy" src={'https://blogs.windows.com/wp-content/uploads/prod/sites/2/2021/10/Windows-11-Bloom-Screensaver-Dark-scaled.jpg'} className="addon-backdrop"/>
                    <div className="flex-container align-center justify-between" id="addon-details-title">
                        <div className="disabled sign-in-gate">
                        </div>
                    </div>
                    <div className="flex-container" id="addon-splitview-container">
                    <div className="addon-details-column" id="addon-details-right-column">
                        <div className="addon-details-segment" id="addon-details-column-actions">
                            <a className="link_link__hbWKh link_secondary__F1rqx" href="/themes"><small>← Back to Themes</small></a>
                            <a target="_blank" className="addon-author-container">
                                <img loading="lazy" src={`https://cdn.discordapp.com/icons/1102739071085846623/03b125b1961432a1a1215da140663f30.webp`}/>
                                <h5>Millennium</h5>
                            </a>
                            <h1 className="title">Fluenty</h1>
                            <div className="title-description theme-desc">
                                {fluenty?.description}
                            </div>
                            {/* <h3 className="addon-details-section-header">Actions</h3> */}
                            <section id="addon-actions">
                            <div className="btn-container direction-column">
                                <div className='wrap-buttons'>
                                <a href="https://www.patreon.com/FluentyforSteam" className="btn btn-primary" id='download-btn'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmUlEQVR4nO2ZT4hNURzHPywMYxaisDXjz4YhIskUYzNi1pQ/CxJrigXNjClWhCWGWFFsGaWkKWPLFJN/ZcpKM/7n+TN5OnVufbuNe+85d+acl96nTq/eud/v73vfu+93z7kP6vxfbAEuAy+Ab3YMA5fsXM3SDAwA1ZzxAFhMjbEB+FggfDLGgI3UCEtS4SvAOWAdMBtoBNba9ypy3CjQEjv8NOChhBoBlmccvwJ4l7qcorIp9clnhU9oBX6Irp2IXJUg5hIpygXRXSQizyWIuc6Lsl50wwRiJdBv+/pEnaXJHvfBoRuZ8cXqZsh7X4G79nKbFLYBv3OCJLiEz9OamlvLhp9b8FOdihOo2nY7p8wJ7BWzV8CifxR0JUvbDLyW+T0l8nNajHocQuSRp+2ReZPBm+titM8xRBZ52v0yf40S3BejjtRcsjQwr67kaTukrskwKb0+3dZO2ZZnXl3J07ZK3WeU4LMYmY4UinlS95OvSZOYfCf8QrEywY3SiWViYNpaaN5I/aU+Bu1iYHZboRmQ+pt9DHaLwQ3Cc1Pq7/IxOCYGZwjPWal/1MdA1+2HCc8RqX/ex+C2GOwgPDul/i0fg8di0EZ42qT+Ix+DETEwK8TQtEj9t67i6cBPK/4DzCQ8s+QEftlMhVmQ2lTEYkxyzHcRrhbhEPEYkhyrXITbRWg287G4JznM3rwwB0XYRzyuSI4DLsKTIuwlHr0ZW9pM+kRovo1YHJIc5j+GwvSLsJN4dEqOOy7CpyI0HSkWayTHExfhqAjNPSEWCyXHexdhcheu2jtiLBolh3ks77WdOw40EJ4G4ITkeOki1idjtTK6XE7ALN4GayB01Y5BnwWlufa77ROJ8Qihx+0D5a7Iv8M6deowhfwF+BC2GOS0rI0AAAAASUVORK5CYII="/>
                                    <span draggable>Purchase • $5 USD</span>
                                </a>
                                {/* <a rel="noreferrer noopener" target="_blank" href={`https://www.patreon.com/FluentyforSteam`} className="btn btn-secondary" id="view-source">
                                    <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                        <path fillRule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                                    </svg>
                                    <span>View More</span>
                                </a> */}
                                </div>
                            </div>
                            </section>

                            {/* <h3 className="addon-details-section-header">About</h3> */}

                            <section id="about-addon">
                            <span className="addon-metadata-row">
                                <strong>Downloads: </strong> {fluenty.downloads} </span>
                            <span className="addon-metadata-row">
                                <strong>Released: </strong>November 24th 2023</span>
                            <span className="addon-metadata-row">
                                <strong>Id: </strong>fluenty-steam</span>
   
                            </section>
                            {/* <h3 className="addon-details-section-header">Author</h3> */}
                            <section id="addon-author">
                            {/* <a target="_blank" href={`https://github.com/${json?.data?.github?.owner}`} className="addon-author-container">
                                <img loading="lazy" src={`https://github.com/${json?.data?.github?.owner}.png`}/>
                                <h5>{json?.data?.github?.owner}</h5>
                            </a> */}
                            </section>
                        </div>

                        {/* Render Discord server invite link if there is one provided */}
                        <div className="addon-details-segment" id="addon-details-column-server">
                            <section id="addon-server">
                            <div className="flex-container align-center">
                                <img loading="lazy" src={"https://cdn.discordapp.com/icons/1102739071085846623/03b125b1961432a1a1215da140663f30.webp"}/>
                                <div className="flex-container justify-center direction-column">
                                <h5>Millennium</h5>
                                <p>Support Server</p>
                                </div>
                            </div>
                            <a rel="noreferrer noopener" target="_blank" className="btn btn-primary btn-join-server" href={"../discord"}>
                                <span>Join Server</span>
                            </a>
                            </section>
                        </div>    
                        {/* Render Tags if there are any */}
                        <div className="addon-details-segment" id="addon-details-column-tags">
                                <h3 className="addon-details-section-header">Tags</h3>
                                <section>
                                <div className="addon-tags">
                                    <span className="addon-tag">
                                    Dark
                                    </span>
                                    <span className="addon-tag">
                                    Fluent
                                    </span>
                                    <span className="addon-tag">
                                    Minimal
                                    </span>
                                    <span className="addon-tag">
                                    Soft
                                    </span>
                                </div>
                                </section>
                            </div> 
                        </div>
                        <div className="addon-details-column" id="addon-details-left-column">
                            <article className="addon-details-segment markdown-readme-content">
                                <div className="markdown-body">
                                    <div >
                                        <h1>Fluenty, made with ❤️ by Millennium</h1>
                                        <p>Inspired by the Microsft Store Fluent Design template launched with Windows 11</p>

                                        <p>You may ask why this theme costs money, and isn't free like the others. 
                                            To deliver the best user experience, with fast and secure servers (including this website) we need funding somehow. 
                                            That's why we made this theme; to give you something in return for supporting us, without forcing ads or other annoying funding methods.</p>

                                        <p>
                                            With that said, keep in mind that even if updates are sometimes infrequent, we are always working on something new and exciting, even if it may not be Fluenty directly.
                                            We are a limited team, and we are doing our best to balance our time between Millennium, Fluenty, and our personal lives.
                                        </p>

                                        <p>
                                            Thanks for understanding, and we hope you enjoy the theme ❤️
                                        </p>

                                        <a href="https://i.imgur.com/ca6ncMp.gif" target="_blank" data-fancybox>
                                            <img src="https://i.imgur.com/ca6ncMp.gif" alt="Steam Skin"/>
                                        </a>
                                        <div className='FluentyImageContainer'>
                                            <a href="https://i.imgur.com/ZbhJmIT.gif" target="_blank" data-fancybox>
                                                <img src="https://i.imgur.com/ZbhJmIT.gif" alt="Steam Skin"/>
                                            </a>
                                            <a href="https://i.imgur.com/VB83oTU.gif" target="_blank" data-fancybox>
                                                <img src="https://i.imgur.com/VB83oTU.gif" alt="Steam Skin"/>
                                            </a>
                                        </div>
                                    </div>
                                        <h2>Installing</h2>
                                        <p>Purchase the theme through patreon subscription</p>
                                        <p>Cancelling the subscription results in keeping the theme, however you will not receive future updates unless you resubscribe</p>
                                        <p>Once subscribed, download the latest listed version and then open Millennium and click the open skins folder. Drag the downloaded theme into that directory and proceed to extract it.</p>
                                        <p>Select it from the menu and your good to go!</p>
                                        <h2>Configuration</h2>
                                        <p>Fluenty comes with 2 built in styles. Compact, and Spacious.</p>
                                        <p>To change between the two head over to the millennium interface and click edit on Fluenty, then deselect/select the compact view appropriately</p>
                                        <div className='FluentyImageContainer'>
                                            <a href="https://i.imgur.com/ca6ncMp.gif" target="_blank" data-fancybox>
                                            <img src="https://i.imgur.com/ca6ncMp.gif" alt="Steam Skin"/>
                                            </a>
                                            <a href="https://i.imgur.com/9U9Vq5x.gif" target="_blank" data-fancybox>
                                            <img src="https://i.imgur.com/9U9Vq5x.gif" alt="Steam Skin"/>
                                            </a>
                                        </div>
                                        <h2>Notice</h2>
                                        <p>Fluenty is very close to being finished, however it's still in development and not everything is perfect. expect bugs and report them in the discord server if you encounter any!</p>
                                    <br />
                                    <br />
                                    <b>Copyright Project-Millennium © {new Date().getFullYear()}</b>
                                </div>
                            </article>
                        </div>
                        
                    </div>
                    </div>
                </section>
                </section>
                {!isSteamClient ? <RenderFooter/> : <></>}
                </div>
            </div>
        </div>
    )
}
