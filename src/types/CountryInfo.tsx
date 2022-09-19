export interface ICountryInfo {
    data: ICountry[]
    status: string
  }
  
export interface ICountry {
    id: string
    name: string
    genericFlag: string
}
