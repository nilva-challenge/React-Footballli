import { Box } from "@mui/material";
import styled from "styled-components";

export const LeaguesListContainer = styled(Box)`
  padding: 16px;
  width: 100vw;
  background-color: #f3f4f9;
  box-sizing: border-box;
  overflow: scroll;
  max-height: 70vh;
  .league-accordion {
    border-radius: 5px;
    border: none;
  }
  .league-avatar {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    transform: translateY(2px);
  }
  .teams-box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .team-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    flex: 1;
    overflow: hidden;
    margin-bottom: 5px;
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 5em;
      height: 1em;
    }
  }
`;
