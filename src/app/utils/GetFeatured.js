"use client";

import { useState, useEffect } from 'react';
import CreateCard from '../components/themes/CardComponent';

function GetLatestThemes() {
    useEffect(() => { FetchThemeData() }, []); 

    const [cards, setCards] = useState([]);
    const [tags, setTags] = useState([]);

    const FetchThemeData = async () => {
        try {
            const sortedThemes = SortThemesByDownload(await FetchThemes());

            setCards(CreateCards(sortedThemes));
            setTags(FilterTagNames(sortedThemes));
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const FetchThemes = async () => {
        const response = await fetch('https://millennium.web.app/api/v2/');
        return response.json();
    };

    const SortThemesByDownload = (themes) => {
        /** By default sort the themes by download count */
        return themes.sort((a, b) => (b?.data?.download ?? 0) - (a?.data?.download ?? 0));
    };

    const CreateCards = (themes) => {
        return themes.map(theme => <CreateCard key={theme.id} data={theme} />);
    };

    const FilterTagNames = (themes) => {
        const uniqueTags = new Set();
        themes.forEach(theme => theme.tags.forEach(tag => uniqueTags.add(tag)));
        return Array.from(uniqueTags);
    };

    return { cards, tags };
}

export default GetLatestThemes;
