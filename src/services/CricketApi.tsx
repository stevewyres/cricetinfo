import {
    SEARCH_PLAYERS,
    SEARCH_SERIES,
    GET_COUNTRIES,
    GET_MATCH_INFO
} 
from '../config';
import { CountryInfo } from '../types/CountryInfo';
import { RequestFromApi } from './ApiHelper';

async function FetchCountries(): Promise<CountryInfo> {
    return await RequestFromApi<CountryInfo>(GET_COUNTRIES);
  }

export default FetchCountries;

