import { Box } from "@mui/material";
import styled from "styled-components";

export const DateSelectorWrapper = styled(Box)`
  width: 100%;
  .date-title {
    color: #cdd2cd;
  }
  .MuiButtonBase-root-JobBs {
    min-width: 18vw;
    font-size: 16px;
    font-weight: bold;
  }

  .MuiTabs-indicator {
    background-color: #5b9a3f;
    width: 33px !important;
    height: 3px;
    bottom: 3px;
    transform: translateX(17px);
  }
`;
