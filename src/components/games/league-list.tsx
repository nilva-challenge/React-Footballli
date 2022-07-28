import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MatchList from './match-list';
import { Avatar, Grid } from '@mui/material';
import { useState } from 'react';
import { dataFormat } from '../../types/types';
import { makeStyles } from '@mui/styles';


type Props = {
    data: dataFormat
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}


const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const useStyles = makeStyles((theme?: any) => ({
    hr: {
        color: "#ECEFF1"
    },
    header: {
        display: 'flex', padding: 5, justifyContent: "space-between"
    },
    content: {
        display: 'flex', flexDirection: "row", alignItems: 'center'
    },
    cart: {
        width: "98%", marginTop: 20, padding: 2
    }
}));


export default function LeagueList({ data }: Props) {
    const [expanded, setExpanded] = useState(false);
    const { content, cart, header, hr } = useStyles()

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card key={data.category} className={cart} >
            <CardActions onClick={handleExpandClick} className={header} >
                <Grid container>
                    <Grid rowSpacing={5} className={content} item>
                        <Avatar sx={{ width: 34, height: 34 }} alt="Remy Sharp" src={data.logos} />
                        <Typography mr={5} color={"blue"}>
                            {data.category}
                        </Typography>
                    </Grid>
                </Grid>
                <ExpandMore
                    expand={expanded}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            {data?.league.map((item: any) => (
                <Collapse key={item.fixture.id} in={expanded} timeout="auto" unmountOnExit>
                    {expanded && <hr className={hr} />}
                    <MatchList fixture={item.fixture} goals={item.goals} away={item.teams.away} home={item.teams.home} />
                </Collapse>
            ))
            }
        </Card>
    )
}
