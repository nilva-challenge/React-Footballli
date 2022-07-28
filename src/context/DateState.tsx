import React, { useReducer } from 'react'
import AppContext from "./appContext"
import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS } from './date-action'
import dateReducer from './date-reducer'
import Axios from "../services/api"
import { data } from '../types/types'
import { fixtures } from '../config/url'

interface InitialState {
    loading: boolean,
    data: data[],
    error: "string" | undefined
}

type Props = {
    children: React.ReactNode
}

export default function DateProvider({ children }: Props) {
    const initialState: InitialState = {
        loading: false,
        data: [],
        error: undefined
    }
    const [state, dispatch] = useReducer(dateReducer, initialState);

    // get data
    const getData = async (date: string) => {
        dispatch({
            type: GET_DATA_REQUEST,
        })
        if (date) {
            await Axios.get(
                fixtures,
                { params: { date: date } }
            ).then(response => dispatch({
                type: GET_DATA_SUCCESS,
                payload: response.data.response
            })).catch((err) =>
                dispatch({
                    type: GET_DATA_FAIL,
                    payload: err
                })
            )
        } else {
            dispatch({
                type: GET_DATA_FAIL,
                payload: "date not found"
            })
        }
    }

    return (
        <AppContext.Provider value={{ data: state.data, loading: state.loading, error: state.error, getData }}>
            {children}
        </AppContext.Provider>
    )
}



