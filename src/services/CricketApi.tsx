import {
    SEARCH_PLAYERS,
    SEARCH_SERIES,
    GET_COUNTRIES,
    GET_MATCH_INFO
} 
from '../config';
import { ICountry, ICountryInfo } from '../types/CountryInfo';
import { RequestFromApi } from './ApiHelper';

async function FetchCountries(): Promise<ICountryInfo> {
  let array: ICountry[] = [{
      id:"1",
      name:"England",
      genericFlag:"https://g.cricapi.com/img/teams/110-637877071130162726.webp"
    },
    {
      id:"2",
      name:"Australia",
      genericFlag:"https://g.cricapi.com/img/teams/110-637877071130162726.webp"
    },
    {
      id:"3",
      name:"West Indies",
      genericFlag:"https://g.cricapi.com/img/teams/110-637877071130162726.webp"
    },
    {
      id:"4",
      name:"India",
      genericFlag:"https://g.cricapi.com/img/teams/110-637877071130162726.webp"
    },
    {
      id:"5",
      name:"Pakistan",
      genericFlag:"https://g.cricapi.com/img/teams/110-637877071130162726.webp"
    },
    {
      id:"6",
      name:"South Africa",
      genericFlag:"https://g.cricapi.com/img/teams/110-637877071130162726.webp"
    },
    {
      id:"7",
      name:"New Zealand",
      genericFlag:"https://g.cricapi.com/img/teams/110-637877071130162726.webp"
    },
  ];

    let country: ICountryInfo = {
      status: "Passed",
      data: array
    };
    return country;

    // return await RequestFromApi<ICountryInfo>(GET_COUNTRIES);
  }

export default FetchCountries;

