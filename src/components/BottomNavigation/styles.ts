import styled from "styled-components";
import { BottomNavigation } from "@mui/material";

export const StyledBottomNavigation = styled(BottomNavigation)`
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  button {
    min-width: 50px;
  }
  .Mui-selected {
    color: #5b9a3f;
  }
`;
