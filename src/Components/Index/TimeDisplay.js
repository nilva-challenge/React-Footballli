const TimeDisplay = ({ dateTime }) => {
  return (
    <span>
      {dateTime.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      })}
    </span>
  );
};

export default TimeDisplay;
