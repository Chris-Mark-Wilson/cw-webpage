import axios from "axios";

const geoApi=axios.create({
    baseURL:"https://geocoding-api.open-meteo.com/v1"
})
export const fetchSelectedCity=(city)=>{
    return geoApi
    .get(`/search?name=${city}`)
    .then((response)=>{
        return response.data.results;
    })
    .catch((err)=>{
        console.log|(err)
    })
    
}