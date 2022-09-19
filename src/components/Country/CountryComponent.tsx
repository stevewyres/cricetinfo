import { ICountry } from "../../types/CountryInfo";
import { Image } from "./CountryComponent.styles";

export const CountryComponent = (props: {country: ICountry}) => {
    return (
        <div>
            <Image src={props.country.genericFlag} alt={props.country.name}></Image>
            <div>{props.country.name}</div>
        </div>
    )
}

