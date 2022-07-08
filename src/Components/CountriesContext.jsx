import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext()

export const CountriesProvider = ({children}) => {

    const [Loaded, setLoaded] = useState(false)
    const [regionList, setRegionList] = useState([]);
    const [countriesFrom, setCountriesFrom] = useState([]);
    const {REACT_APP_COUNTRIES_URL} = process.env

    const loadData = async () => {
        setLoaded(true)

        let {data} = await (await fetch(REACT_APP_COUNTRIES_URL,{
            method: 'GET',
            referrerPolicy: 'strict-origin-when-cross-origin'
        })).json()

        data = Object.keys(data).map(key => data[key])
        let array = []

        data.map((data) => {
            !array[data.region] && (array[data.region] = [])
            array[data.region].push(data.country)
        })
        setRegionList(Object.keys(array))
        setCountriesFrom(array)
    }

    useEffect(() =>{
        if(!Loaded)
            loadData()
    // eslint-disable-next-line
    },[regionList, countriesFrom])

    const {Provider} = CountriesContext
    return (
        <Provider value={{
            regionList,
            countriesFrom
        }}>
            {children}
        </Provider>
    )
}

