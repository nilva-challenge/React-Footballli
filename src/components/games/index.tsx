import { Avatar, CircularProgress, Grid } from '@mui/material';
import React, { Fragment, useContext } from 'react'
import DateContext from '../../context/appContext';

import { formatFollowers } from '../../utils/date';
import LeagueList from './league-list';


type Props = {}

export default function Index({ }: Props) {
    const { data, loading } = useContext<any>(DateContext)
    if (loading) {
        return <Grid style={{ display: "flex", padding: "1rem", justifyContent: 'center' }} container><CircularProgress /></Grid>
    } else
        return (
            <Fragment>
                <Grid style={{ display: "flex", padding: "1rem", justifyContent: 'center' }} container>
                    {formatFollowers(data).map((item: any) => {
                        return (
                            <LeagueList data={item} />
                        )
                    })}
                </Grid >
                <div style={{ marginTop: "3rem", display: 'flex' }} />
            </Fragment>
        )
}