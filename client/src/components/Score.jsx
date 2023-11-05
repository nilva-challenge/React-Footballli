import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Score = ({ league }) => {
  const [showMatch, setShowMatch] = useState(false);
  const { matchs } = league;

  return (
    <div>
      <section
        className='flex items-center justify-between p-2 rounded-md bg-white overflow-hidden'
        onClick={() => setShowMatch(!showMatch)}>
        <div className='flex items-center gap-3'>
          <img src={league.leagueLogo} width={30} height={30} />
          <p className='text-base  text-blue-800'>{league.leagueName}</p>
        </div>
        <div>
          {showMatch ? (
            <FaChevronUp className='text-gray-500' />
          ) : (
            <FaChevronDown className='text-gray-500' />
          )}
        </div>
      </section>
      {showMatch && (
        <div
          className='h-auto bg-white rounded-b-md pb-3
        '>
          {matchs.map((match) => (
            <div key={match.matchId}>
              <div className={`flex justify-center h-auto pt-4 gap-4  items-center`}>
                <div className='flex items-center w-auto'>
                  <p className='font-bold text-sm min-w-[70px]'>{match.awayTeam}</p>
                  <img src={match.awayTeamLoago} width={25} height={25} />
                </div>
                <div>
                  <span>{match.matchTime.minute}</span>
                  <span> : </span>
                  <span>{match.matchTime.hour}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={match.guestTeamLogo} width={25} height={25} />
                  <p className='font-bold text-sm min-w-[70px]'>{match.guestTeam}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Score;
