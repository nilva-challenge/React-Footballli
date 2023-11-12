import classes from "./Spinner.module.css";

const Spinner = () => (
  <div className={classes["lds-ellipsis"]}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;
