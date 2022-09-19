export interface CountryInfo {
    data: Country[]
    status: string
  }
  
export interface Country {
    id: string
    name: string
    genericFlag: string
}
