import axios from 'axios'
import { API_KEY } from '../helpers/api-key.helper'
import { TMatch } from '../types/match.types'

const axiosInstance = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
    headers: { 'x-apisports-key': API_KEY },
})

export const getMatchInfo = async (
    date: string,
    status: 'NS' | 'FT'
): Promise<TMatch[]> =>
    (
        await axiosInstance.get(
            `/fixtures?date=${date}&timezone=Asia/Tehran&status=${status}`
        )
    ).data.response
