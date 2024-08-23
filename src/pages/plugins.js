import { GeistSans } from 'geist/font/sans';
import Head from "next/head"
import RenderFooter from '../app/components/FooterComponent'
import RenderHeader from '../app/components/HeaderComponent'
import '../css/index.css'

export async function getServerSideProps(context) 
{
    const isSteamClient = /Valve Steam Client/.test(context.req.headers['user-agent']);
    return { props: { isSteamClient } };
}

function PluginLibrary({ isSteamClient }) {

	return (
		<div className={GeistSans.className}>
        <Head>
            <title>Plugins • Millennium</title>
        </Head>
		<div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
			<div className="vm-placement" id="vm-av" data-format="isvideo"></div>
			{!isSteamClient && <RenderHeader/>}
			<main id="main-page-content" className='plugins-soon'>
				<section id="addons-header" className="page-section content-header center-abs">
					<div className="page-section-inner flex-container justify-between align-center" id="theme-header">
					<div className="header-left">
						<img className='nothing-here' src='https://i.pinimg.com/originals/ff/ea/83/ffea83e9bdc39afafebd459dfde07b01.gif'></img>
						<h1 className="title">Nothing here yet!</h1>
						<p className="title-tooltip">This feature is currently in the works, and we're working hard to polish it up. Check back later!</p>
					</div>
					</div>
				</section>
			</main>
			{!isSteamClient && <RenderFooter/>}
		</div>
	)
}

export default PluginLibrary