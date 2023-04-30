const TimeDisplay = ({ dateTime }) => {
  return (
    <span>
      {dateTime.toLocaleDateString("fa-IR", {
        month: "long",
        day: "numeric",
      })}
    </span>
  );
};

export default TimeDisplay;
