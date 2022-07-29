import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import Result from "../components/Result";
import { ReactComponent as NotFoundSvg } from "../assets/404.svg";

const NotFound = () => {
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
      image={<NotFoundSvg />}
      maxWidth="sm"
      subTitle="به صفحه های بازی ها برگردید"
      title="یافت نشد"
    />
  );
};

export default NotFound;
