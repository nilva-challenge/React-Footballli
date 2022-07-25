import styled from "styled-components";
import { Box } from "@mui/material";

export const FixturesPageContainer = styled(Box)`
  .fixtures-top-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .topbar-icon {
    font-size: 35px;
    transform: scaleX(-1);
  }
`;
