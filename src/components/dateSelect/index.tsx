import React, { useContext, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import clsx from "clsx";
import { getAllDaysInMonth, formatDate, getInfo } from '../../utils/date';
import DateContext from '../../context/appContext';
import useInfiniteScroll, {
    ScrollDirection
} from "react-easy-infinite-scroll-hook";
import "./header.css"

const useStyles = makeStyles((theme?: any) => ({
    navLink: {
        display: "flex",
        marginTop: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        color: "slategrey",
        height: "1.5rem",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
    },
    hr: {
        borderBottom: " 4px solid #4caf50",
        width: "90%",
        borderRadius: "2px",
        marginBottom: 0,
    },
    active: {
        color: "black",
        fontWeight: "bold",
    }
}));


type Props = {}

export default function DateComponent({ }: Props) {
    const [value, setValue] = useState(new Date().toDateString());
    const [numberOfDate, setNumberOfDate] = useState(30);
    const { getData } = useContext<any>(DateContext)
    const { hr } = useStyles()


    useEffect(() => {
        const date = new Date(value);
        getData(String(formatDate(date)))
    }, [value])

    const next = async (direction: ScrollDirection) => {
        await setNumberOfDate(numberOfDate + 30)
    };

    // 👇️ all days of the current month
    const dates = getAllDaysInMonth(numberOfDate);

    const ref = useInfiniteScroll({
        next,
        columnCount: dates.length,
        hasMore: { right: true }
    });

    return (
        <Box sx={{ width: "100%", backgroundColor: "white", typography: 'body1' }}>
            <Grid container>
                <Grid className={"navDate"} ref={ref} item>
                    {dates.map((item) => (

                        <Grid key={item} item justifyContent={"center"}>
                            <div onClick={() => setValue(item)} className={clsx("navLink", item === value && "active")} > {getInfo(item)}  </div>
                            {item === value && <hr className={hr} />}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box >
    )
}