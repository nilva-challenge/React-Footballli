import React from "react";
import Score from "./Score";

const MatchScores = React.forwardRef(({ data }, ref) => {
  const leaugeBody = (
    <div className=''>
      <Score league={data} />
    </div>
  );

  const content = ref ? (
    <article className='' ref={ref}>
      {leaugeBody}
    </article>
  ) : (
    <article className=''>{leaugeBody}</article>
  );

  return content;
});

export default MatchScores;
