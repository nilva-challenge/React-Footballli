import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import { makeStyles } from '@mui/styles';
import { GiSoccerField } from "react-icons/gi";


const useStyles = makeStyles((theme?: any) => ({
    footer: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
    }
}));

const navigation = [
    {
        label: "پروفایل",
        value: "Profile",
        disabled: true,
        icon: <PersonOutlineOutlinedIcon />
    },
    {
        label: "لیگ ها",
        value: "Leagues",
        disabled: true,
        icon: <EmojiEventsOutlinedIcon />
    },
    {
        label: "فوتبال",
        value: "Football",
        disabled: true,
        icon: <SportsSoccerOutlinedIcon />
    },
    {
        label: "اکتشافات",
        value: "Explore",
        disabled: true,
        icon: <ExploreOutlinedIcon />
    },
    {
        label: "مسابقات",
        value: "Match",
        disabled: false,
        icon: <GiSoccerField size={34} />
    },
]

function Footer() {
    const [value, setValue] = React.useState('Match');
    const { footer } = useStyles()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (<footer className={footer}>
        <BottomNavigation sx={{ width: "100%", margin: 0, backgroundColor: "white", justifyContent: "space-between" }} showLabels value={value} onChange={handleChange}>
            {navigation.map((item) => (
                <BottomNavigationAction
                    label={item.label}
                    value={item.value}
                    disabled={item.disabled}
                    icon={item.icon}
                />
            ))}
        </BottomNavigation>
    </footer>
    );
}

export default React.memo(Footer);