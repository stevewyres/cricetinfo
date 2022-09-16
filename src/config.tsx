const API_URL = 'https://api.cricapi.com/v1/';
const API_KEY = process.env.CRICKET_APP_API_KEY;
const SEARCH_PLAYERS = `${API_URL}players?api_key=${API_KEY}&offset=0&search=`
const SEARCH_SERIES= `${API_URL}series?api_key=${API_KEY}&offset=0&search=`
const GET_COUNTRIES = `${API_URL}countries?api_key=${API_KEY}`;
const GET_MATCH_INFO = `${API_URL}match_info?api_key=${API_KEY}&id=`;
export {
    API_URL,
    API_KEY,
    SEARCH_PLAYERS,
    SEARCH_SERIES,
    GET_COUNTRIES,
    GET_MATCH_INFO
}
