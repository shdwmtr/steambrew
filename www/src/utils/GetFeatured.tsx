'use client';

import { useState, useEffect } from 'react';
import CreateCard from '../components/ThemeCard';

interface CommitData {
	oid: string;
	commitUrl: string;
	committedDate: string;
}

interface GitHubData {
	owner: string;
	repo: string;
}

interface Data {
	github: GitHubData;
	download: number;
	id: string;
	create_time: string;
}

interface Patch {
	MatchRegexString: string;
	TargetJs?: string;
	TargetCss?: string;
}

interface SkinData {
	'Steam-WebKit': string;
	Patches: Patch[];
	UseDefaultPatches: boolean;
	author: string;
	description: string;
	name: string;
	version: string;
	github: {
		owner: string;
		repo_name: string;
	};
	discord_support: {
		inviteCodeExcludingLink: string;
	};
	tags: string[];
	header_image: string;
	splash_image: string;
}

interface SteamSkin {
	header_image: string;
	splash_image: string;
	tags: string[];
	download: string;
	name: string;
	description: string;
	version: string;
	commit_data: CommitData;
	data: Data;
	skin_data: SkinData;
}

function GetLatestThemes() {
	useEffect(() => {
		FetchThemeData();
	}, []);

	const [cards, setCards] = useState<React.JSX.Element[]>([]);
	const [tags, setTags] = useState<string[]>([]);

	const FetchThemeData = async () => {
		try {
			const sortedThemes = SortThemesByDownload(await FetchThemes());

			setCards(CreateCards(sortedThemes));
			setTags(FilterTagNames(sortedThemes));
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const FetchThemes = async (): Promise<SteamSkin[]> => {
		const response = await fetch('https://steambrew.app/api/v2/');
		return response.json();
	};

	const SortThemesByDownload = (themes: SteamSkin[]): SteamSkin[] => {
		/** By default sort the themes by download count */
		return themes.sort((a, b) => (b?.data?.download ?? 0) - (a?.data?.download ?? 0));
	};

	const CreateCards = (themes: SteamSkin[]) => {
		return themes.map((theme) => <CreateCard key={theme.data.id} data={theme} />);
	};

	const FilterTagNames = (themes): string[] => {
		const uniqueTags = new Set<string>();
		themes.forEach((theme) => theme.tags.forEach((tag) => uniqueTags.add(tag)));
		return Array.from(uniqueTags);
	};

	return { cards, tags };
}

export default GetLatestThemes;
