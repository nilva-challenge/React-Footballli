import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import Result from "../components/Result";
import { ReactComponent as ConstructionsSvg } from "../assets/constructions.svg";

const UnderConstructions = () => {
  return (
    <Result
      extra={
        <Button
          color="secondary"
          component={RouterLink}
          to={`/`}
          variant="contained"
        >
          برگشت به خانه
        </Button>
      }
      image={<ConstructionsSvg />}
      maxWidth="sm"
      subTitle="صفحه در دست ساخت است"
      title="صفحه هنوز تکمیل نشده است"
    />
  );
};

export default UnderConstructions;
