import React, { useEffect, useState } from "react";
import FetchCountries from "../../services/CricketApi";
import { CountryInfo } from "../../types/CountryInfo";

const initialState : CountryInfo = {
    data:[],
    status: ''
}
const Countries = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');

    const fetchCountries = async() => {
        try {
            setError(false);
            setLoading(true);
            console.log(process.env, process.env.REACT_APP_API_KEY)
            const countries = await FetchCountries();
            console.log("list of countries", countries);
            if (countries.status === 'failure') {
                setError(true);
            } 
            else {
                setState(countries);
            }
        } catch(error) {
            console.log('in error', error);
            setError(true);
        }
        setLoading(false);
    }
    
    useEffect(() => {
        console.log('steve');
        setState(initialState);
        fetchCountries()
    }, [value])
    return (
        error 
        ? <div>There was an error</div>
        : <div>stuff goes here</div>
    )
};

export default Countries;