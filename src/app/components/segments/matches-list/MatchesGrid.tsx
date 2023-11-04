import { Fragment } from "react";
import { map } from "lodash";

type MatchesGridProps = {
  data: any;
};

export default function MatchesGrid({ data }: MatchesGridProps) {
  return (
    <div
      className="mx-auto justify-center items-center justify-items-center"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 30px max-content 30px 1fr",
        gap: "5px 10px",
      }}
    >
      {data?.map((dataObject: any, index: number) => (
        <Fragment key={index}>
          {map(dataObject, (value, index) => (
            <Fragment key={index}>{value}</Fragment>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
