export async function getServerSideProps(context) {
    return {
        redirect: {
            destination: 'https://raw.githubusercontent.com/SteamClientHomebrew/Millennium/main/scripts/update.ps1',
            permanent: false,
        }
    }
}

export default async function Home({ params }) { }