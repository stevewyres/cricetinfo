import { Country } from "../../types/CountryInfo";

export const CountryComponent = (country: Country) => {
    return (
        <div>
            <img src={country.genericFlag} alt={country.name}></img>
            <div>{country.name}</div>
        </div>
    )
}

