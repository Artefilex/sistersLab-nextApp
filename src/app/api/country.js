import axios from "axios"


const baseURL = "https://restcountries.com/v3.1/all"

const axiosFetch = axios.create({
    baseURL,
})

export const  fetchCountrys = async () =>{
    const response = await axiosFetch.get()
    return response.data
}


