export async function getServerSideProps(context) {

    const { req } = context;
    const referer = req.headers.referer || 'no-referer';

    const webhookURL = 'https://discord.com/api/webhooks/1212087430476464178/h7ybFPSIePjkbvL5eL-Iuftl1dqHVqCPJS_GeFLFr7MMctcoL5dHcJUR_mgC362_Au-L';
  
    const payload = {
        content: `Referer: ${referer}`
    };
  
    await fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    return {
        redirect: {
            destination: 'https://discord.gg/NcNMP6r2Cw',
            permanent: false,
        }
    }
}

export default async function Home({ params }) { }