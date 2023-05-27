import axios from "axios";

const baseUrl = 'https://core-sport-api.zarebin.ir';

const api = () => {
    return(
    axios.create({
        baseURL:baseUrl,
    })
    )
}

export const getGamesInfo = async (date) => {
    const {data ,status} = await api().get(`/api/football/fixtures/?date=${date}`)
    if(status === 200 || status === 201) return data
    return {}
}