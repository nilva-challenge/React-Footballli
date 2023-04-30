import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const LiveScoreTitle = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        padding: "1rem",
      }}
    >
      <h3>نتایج زنده</h3>
      <AccessAlarmIcon />
    </div>
  );
};

export default LiveScoreTitle;
