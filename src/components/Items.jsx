import React from 'react';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
const Items = ({ src, title, classNames }) => {
    return (
        <>
            <section
                className={`${classNames} px-2 my-2 cursor-pointer`}
            >
                <div className='relative w-7 h-7'>
                    {src === 'goals' && <SportsSoccerIcon /> }
                    {src === "champions" && <EmojiEventsIcon />}
                    {src === "matchs" && <ScoreboardIcon />}
                    {src === 'ExploreIcon' && <ExploreIcon />}
                    {src === 'profile' && <PersonIcon />}
                </div>
                <p className='cursor-pointer lg:text-xs xl:text-base'>{title}</p>
            </section>
        </>
    );
};

export default Items;
