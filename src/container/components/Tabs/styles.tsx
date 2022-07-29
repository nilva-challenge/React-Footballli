import styled from "styled-components";
import { Box } from "@mui/material";
import { Props } from "./types";

const PageText: React.FC<Props> = ({ id, onClick, className, children }) => {
  return (
    <button id={id} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export const Tab = styled(PageText)`
  font-size: 15px;
  padding: 10px 18px;
  cursor: pointer;
  opacity: 0.4;
  font-weight: 800;
  background: white;
  border: 0;
  outline: 0;
  direction: rtl;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ active }) =>
    active &&
    `
    color: blue;
    border-bottom: 2px solid blue;
    opacity: 1;
    transition: all 0.4s ease-in-out;
  `}
  &:after {
    border: 10px solid transparent;
    transform: translateX(-50%);
    border-bottom-color: $c-one;
    transition: all 0.4s ease-in-out;
  }
`;
