import styled from "styled-components";
import { Box } from "@mui/material";

export const TopbarContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;

  .topbar-icon {
    font-size: 35px;
    transform: scaleX(-1);
  }
`;
