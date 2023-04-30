import { TextField } from "@mui/material";
import LiveScoreTitle from "./Components/Index/LiveScoreTitle";

function App() {
  // const currentDate = new Date();
  // let explicitMonthCoercion = currentDate.getMonth() + 1;
  // explicitMonthCoercion = "0" + explicitMonthCoercion;
  // console.log("english Date", explicitMonthCoercion);
  // console.log(
  //   "Persian Date",
  //   currentDate.toLocaleDateString("fa-IR", {
  //     month: "long",
  //     day: "numeric",
  //   })
  // );
  return (
    <>
      <div>
        <LiveScoreTitle />
        <div style={{ padding: "1rem" }}>
          <TextField label="جستجو" style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default App;
