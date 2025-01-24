
const API_URL = process.env.NODE_ENV === 'development' ? 
    'http://localhost:3001/steam-brew/us-central1/api' : 'https://steambrew.app';

export { API_URL };