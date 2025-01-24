"use client"
// import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import Head from "next/head"
import GetLatestThemes from '../app/utils/GetFeatured';
import RenderFooter from '../app/components/FooterComponent'
import RenderHeader from '../app/components/HeaderComponent'
import { DisplayFluentyAd } from '../app/components/fluenty/RenderFluenty'
import '../css/index.css'
import Select from 'react-select';
import { useState, useEffect } from 'react';
import CreateCard from '../app/components/plugins/CardComponent';
// const inter = Inter({ subsets: ["latin"] });
import { API_URL } from '../app/utils/globals';

export async function getServerSideProps(context) {
    const { req } = context;
    const userAgent = req.headers['user-agent'];
  
    const isSteamClient = /Valve Steam Client/.test(userAgent);
    return { props: { isSteamClient } };
}

function PluginLibrary({ isSteamClient }) {

    const [cards, setCards] = useState([]);
    const [tags, setTags] = useState([]);
    const [sortBy, setSortBy] = useState(1); // Default sorting method
    const [selectedTags, setSelectedTags] = useState({label: "All"});
	
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL + '/api/v1/plugins');
                let result = await response.json();

				const buffer = ["All"];
                result.forEach(theme => {
                    theme?.tags?.forEach(tag => {
                        if (!buffer.includes(tag)) {
                            buffer.push(tag);
                        }
                    });
                });

                setTags(buffer);
                let sorted = [...result];
				let filteredData = [];

				if (selectedTags.label != "All") {
					filteredData = result.filter(item => {
						return item.tags.includes(selectedTags.label)
					});
				}
				else {
					filteredData = result
				}

				console.log(filteredData)

                switch (sortBy) {
                    case 1: // Most Downloaded
                        sorted = filteredData.sort((a, b) => (b?.downloadCount ?? 0) - (a?.downloadCount ?? 0));
                        break;
                    case 2: // Least Downloaded
                        sorted = filteredData.sort((a, b) => (a?.downloadCount ?? 0) - (b?.downloadCount ?? 0));
                        break;
                    case 3: // Recently Updated
                        sorted = filteredData.sort((a, b) => (new Date(b.commitDate) - new Date(a.commitDate)));
                        break;
                    case 4: // Least Recently Updated
                        sorted = filteredData.sort((a, b) => (new Date(a.commitDate) - new Date(b.commitDate)));
                        break;
                    case 5: // Alphabetically
                        sorted = filteredData.sort((a, b) => (a?.pluginJson?.common_name ?? a?.repoName).localeCompare((b?.pluginJson?.common_name ?? b?.repoName)));
                        break;
                    default:
                        break;
                }
                const cardElements = sorted.map((item) => (
                    <CreateCard key={item.id} data={item} />
                ));

                setCards(cardElements);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [sortBy, selectedTags]); 

	const [options, setOptions] = useState([
		{ value: 1, label: "Most Downloaded", checked: true },
		{ value: 2, label: "Least Downloaded", checked: false },
		{ value: 3, label: "Recently Updated", checked: false },
		{ value: 4, label: "Least Recently Updated", checked: false },
		{ value: 5, label: "Alphabetically", checked: false }
	]);

	const toggleCheckbox = (index) => {
		const updatedOptions = options.map(option => {
			if (option.value === index) {
				console.log('updating index ', option.label, option.checked);
				setSortBy(option.value)
				return { ...option, checked: !option.checked };
			} else {
				return { ...option, checked: false };
			}
		});
		setOptions(updatedOptions);
	};

	console.log("rerendering")

	const handleTagChange = (selectedOptions) => {
        setSelectedTags(selectedOptions);
    };

	return (
		<div className={GeistSans.className}>
        <Head>
            <title>Plugins • Millennium</title>
        </Head>
		<div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
			<div className="vm-placement" id="vm-av" data-format="isvideo"></div>
			{!isSteamClient ? RenderHeader() : <></>}
			<main id="main-page-content">
			<section id="addons-header" className="page-section content-header">
				<div className="page-section-inner flex-container justify-between align-center" id="theme-header">
				<div className="header-left">
					<h1 className="title">Let's Get Plugging!</h1>
					<p className="title-tooltip">Browse the community's custom made plugins. We might have exactly what you're looking for!</p>
					<p className="title-tooltip add-new"><a href="https://github.com/shdwmtr/plugdb">Have your own plugin to add here?</a></p>
				</div>
				</div>
			</section>
			<div className="ad leaderboard_ros_atf" id="ad-container-1"></div>
			<div className='themes-panel'>
				<div className='themes-left-side'>
					<div className='filter-header'>Filter Plugins</div>
					<form className="header-right search-container">
						<svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
						<path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
						</svg>
						<input className="search" id="addon-search" type="text" name="search" placeholder="Type here to search..." />
						<button className="search-clear-btn" type="reset">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="16" height="16">
							<path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
						</svg>
						</button>
					</form>
					<div className='filter-header'>Sort By</div>
					{ options.map((tag, index) => (
						<div key={index} className="theme-tag" onClick={() => toggleCheckbox(tag.value)}>
							<span className="checkbox_check__5FdyV">
								<input
									className="geist-sr-only checkbox_input__ydSbd"
									id={`checkbox-sort-${tag.value}`}
									type="checkbox"
									checked={tag.checked} // Assuming you have a property 'checked' in your tag object
									onChange={() => toggleCheckbox(tag.value)}
								/>
								<span aria-hidden="true" className="checkbox_icon__6T6ug" >
									<svg fill="none" height="16" viewBox="0 0 20 20" width="16">
										<path d="M14 7L8.5 12.5L6 10" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
										<line stroke="var(--checkbox-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="15" y1="10" y2="10" />
									</svg>
								</span>
							</span>
							{tag.label}
						</div>
					))}

					<div className='filter-header filter-spacer'>Filter Tags</div>
					<Select 
						className="react-select-container"
						classNamePrefix="react-select" 
						placeholder="Select tags..."
						options={tags.map((tag, index) => { return {value: index, label: tag} })}
						onChange={handleTagChange}
						value={selectedTags}
					/>
					
				</div>
				<div className='themes-right-side'>
					<section id="addons-content" className="page-section">
						{/* <div className="add-submission">
							<button>Submit a Plugin</button>
						</div> */}
						<div className="theme-listings">
							{
								!cards.length ? <div className="spinner"></div> :
								<div className="card-container plugin-card-container">
									{ cards.map((tag, index) => (
										<div key={index}>
											{tag}
										</div>
									))}	
								</div>
							}
						</div>
					</section>
				</div>
			</div>
			</main>
			{!isSteamClient ? RenderFooter() : <></>}
		</div>
	)
}

export default PluginLibrary