import { AppBar, InputAdornment, TextField, Toolbar, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from "@mui/icons-material/Search";

type Props = {}

const useStyles = makeStyles((theme?: any) => ({
    bold: {
        fontWeight: "10rem"
    },
    header: {
        backgroundColor: "white",
        display: "flex"
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        textAlign: "left",
        borderStyle: "none",
        backgroundColor: "#ffff",
        display: 'flex',
        justifyContent: "space-between"
    },
    input: {
        backgroundColor: "#ECEFF1",
        borderRadius: 3,
        width: "98%",
        marginTop: "5rem",
        '&:hover': {
            borderColor: "rgb(7, 177, 77, 0.42)",
        }
    },
    search: {
        backgroundColor: "white",
        borderStyle: "none",
        display: 'flex',
        justifyContent: "center",
    }
}));

export default function Header({ }: Props) {
    const { header, logo, bold, input, search } = useStyles();

    const displayDesktop = () => {
        return <Toolbar className={logo}>
            {femmecubatorLogo}
        </Toolbar>;
    };
    const femmecubatorLogo = (
        <Fragment>
            <Typography className={bold} variant="h4" component="h1">
                نتایج زنده
            </Typography>
            <AccessTimeIcon fontSize='large' />
        </Fragment>
    );

    return (
        <AppBar position='static' style={{ backgroundColor: "#ffffff" }} elevation={0} className={header}>
            {displayDesktop()}
            <div className={search}>
                <TextField
                    size='medium'
                    className={input}
                    placeholder='جستجو...'
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </AppBar >
    )
}