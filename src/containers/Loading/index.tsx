import { CircularProgress } from "@mui/material";
import { ProgressContainer } from "./styles";

export default function Loading() {
  return (
    <ProgressContainer>
      <CircularProgress />
    </ProgressContainer>
  );
}
