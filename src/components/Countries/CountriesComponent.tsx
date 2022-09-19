import React, { useEffect, useState } from "react";
import FetchCountries from "../../services/CricketApi";
import { ICountryInfo } from "../../types/CountryInfo";
import { CountryComponent } from "../Country/CountryComponent";
import style from "./CountriesComponent.module.scss";
const initialState : ICountryInfo = {
    data:[],
    status: ''
}
const CountriesComponent = () => {
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
        setState(initialState);
        fetchCountries()
    }, [value])
    return (
        error 
        ? <div>error</div>
        : <div className={style.grid}>
            {state.data.map(item => (
                <CountryComponent country={item} key={item.id}/>      
            ))}
        </div>
    )
};

export default CountriesComponent;