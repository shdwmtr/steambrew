const fluenty = {
    description: "A theme based off of Windows 11 design principles",
    version: "1.0.2",
    // yes I manually have to update this as patreon doesnt have an api for it
    downloads: "7.2K"
}

function DisplayFluentyAd() {

    return (
        <>
            <a className="card-wrap" href="/fluenty-steam">
                <div className="card">
                    <img loading="lazy" className="card-image" src='https://i.imgur.com/2aAaAES.gif' alt="Thumbnail" data-holder-rendered="true" />
                    <div className="card-body">
                    <h3 className="card-title">Fluenty</h3>
                    <p className="card-description package-description">{fluenty.description}</p>
                    <div className="card-footer">
                        <div className="card-stats">
                        <div className="card-stat" id="addon-likes">
                            <div className="pfp-name">
                                <p className="card-subtext package-author">by Shadow, Hexality</p> 

                                <a target="_blank" className="addon-author-container">
                                    <img loading="lazy" src={`https://i.imgur.com/xSqPofh.png`}/>
                                </a>
                            </div>
                            <div aria-label="View demo" className="card_demo-link__kBqwW" role="link" type="button">
                                <svg className="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" style={{ color: 'currentColor', width: '20px', height: '20px' }}>
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14L21 3"></path>
                                </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="downloadTag">
                        <svg className="package-stat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                <path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                        </svg>
                        <span className="downloadTagText">{fluenty.downloads}</span>
                    </div>
                </div>
            </a>
        </>
    )

}

export { DisplayFluentyAd, fluenty }