"use client"
export const GetStatisticsSync = async () => 
{
    const discord = await fetch('https://discord.com/api/v9/invites/NcNMP6r2Cw?with_counts=true&with_expiration=true').then((response) => response.json());
    const github = await fetch("https://api.github.com/repos/shdwmtr/millennium/releases").then((response) => response.json());
    const contributors = await fetch("https://api.github.com/repos/shdwmtr/millennium/contributors").then((response) => response.json());

    // add download count from old cdn as well: https://api.github.com/repos/ShadowMonster99/millennium-steam-binaries/releases
    const totalDownloads = github.reduce((acc, release) => {
        return acc + release.assets.reduce((sum, asset) => sum + asset.download_count, 0);
    }, 0) + 174452;

    console.log(contributors)

    return {
        version: github[0].tag_name,
        download_count: totalDownloads,
        server_members: discord.approximate_member_count,
        contributors: contributors
    }
}

export const FormatNumber = (number) => {
    return number >= 1000 ? `${(number / 1000).toFixed(1)}K` : number
}

export const FormatBytes = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export const DateToString = (dateString) => {
    return new Date(new Date(dateString).getTime() - new Date(dateString).getTimezoneOffset() * 60000).toDateString();
}