import "../styles/Result.css";
type props = {
  startTime: string;
  homeGoals: number;
  awayGoals: number;
  elapsed?: number;
  status: string;
};

const Result = ({
  awayGoals,
  homeGoals,
  startTime,
  status,
  elapsed,
}: props) => {
  const hour = new Date(startTime).getHours();
  const minute = new Date(startTime).getMinutes();

  if (status === "NS")
    return (
      <div className="start-time">
        {hour}:{minute}
      </div>
    );
  if (status === "1H" || status === "2H" || status === "HT")
    return (
      <>
        <div className="info-container">
          <div className="additional-info">'{elapsed}</div>
          <div className="result-container">
            <div>{homeGoals}</div>
            <div>-</div>
            <div>{awayGoals}</div>
          </div>
          <div className="additional-info">{status}</div>
        </div>
      </>
    );
  if (status === "FT" || status == "PEN")
    return (
      <div className="result-container">
        <div>{homeGoals}</div>
        <div>-</div>
        <div>{awayGoals}</div>
      </div>
    );
  else return <div className="unknown">?</div>;
};

export default Result;
