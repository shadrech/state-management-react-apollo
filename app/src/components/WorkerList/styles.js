import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: ${({ theme: { blue } }) => blue};
  border: 1px solid ${({ theme: { blue } }) => blue};
  border-radius: 50%;
  height: 40px;
  width: 50px;
  margin-left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
`;
