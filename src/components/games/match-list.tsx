import { Avatar, Typography } from '@mui/material'
import moment from 'jalali-moment'
import { fixture, goals, teams } from '../../types/types'
import { makeStyles } from '@mui/styles';


type Props = {
    away: teams,
    home: teams,
    goals: goals,
    fixture: fixture,
}

const useStyles = makeStyles((theme?: any) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    team: {
        display: "flex",
        padding: 5,
        justifyContent: "center",
        alignItems: 'center'
    },
    score: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
}));

export default function MatchList({ fixture, away, home, goals }: Props) {
    const { container, team, score } = useStyles()

    return (
        <div className={container}>
            <div className={team}>
                <Typography fontWeight={"bold"} variant='caption'>{home.name}</Typography>
                <Avatar sx={{ width: 34, height: 34 }} alt="Remy Sharp" src={home.logo} />
            </div>
            <div className={score}>
                {fixture.status.short === "FT" ?
                    <Typography fontWeight={"bold"} variant='subtitle1' > {goals.home} - {goals.away}</Typography>
                    :
                    <Typography>
                        {moment.unix(fixture.timestamp).format('HH:mm')}
                    </Typography>
                }
            </div>
            <div className={team}>
                <Avatar sx={{ width: 34, height: 34 }} alt="Remy Sharp" src={away.logo} />
                <Typography fontWeight={"bold"} variant='caption'>{away.name}</Typography>
            </div>
        </div>
    )
}