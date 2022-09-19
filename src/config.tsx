const API_URL = 'https://api.cricapi.com/v1/';
const API_KEY = process.env.REACT_APP_API_KEY;
const SEARCH_PLAYERS = `${API_URL}players?apikey=${API_KEY}&offset=0&search=`
const SEARCH_SERIES= `${API_URL}series?apikey=${API_KEY}&offset=0&search=`
const GET_COUNTRIES = `${API_URL}countries?apikey=${API_KEY}`;
const GET_MATCH_INFO = `${API_URL}match_info?apikey=${API_KEY}&id=`;
export {
    API_URL,
    API_KEY,
    SEARCH_PLAYERS,
    SEARCH_SERIES,
    GET_COUNTRIES,
    GET_MATCH_INFO
}
