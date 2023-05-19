import React from "react";
import styled from "styled-components";

interface Props {
  fixture: {
    id: string;
    home: {
      id: number;
      logo: string;
      name: string;
    };
    away: {
      id: number;
      logo: string;
      name: string;
    };
    start_time: string;
    home_goals: number;
    away_goals: number;
  };
}

const Match: React.FC<Props> = ({ fixture }) => {
  console.log("asjdfasdkj", fixture);

  return (
    <Wrapper>
      {fixture && (
        <>
          <div className="home">
            <div>{fixture?.home?.name}</div>
            <img src={fixture?.home?.logo} alt={fixture?.home?.name} />
          </div>

          <div>
            {fixture?.start_time.split("T")[1].split(":")[0] +
              ":" +
              fixture?.start_time.split("T")[1].split(":")[1]}
          </div>

          <div className="away">
            <img src={fixture?.away?.logo} alt={fixture?.away?.name} />
            <div>{fixture?.away?.name}</div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Match;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 0.7rem;
  align-items: center;

  .home,
  .away {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;
