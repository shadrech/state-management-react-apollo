import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.darkBlue};
  box-sizing: border-box;
  padding: 0 ${props => props.theme.sidePadding};
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  & > * {
    display: inline-block;
    padding-right: 1rem;
  }
  svg {
    height: 30px;
  }
`;

export const SearchInput = styled.div`
  position: relative;
  input {
    border: none;
    height: 30px;
    padding: 0 0 0 1.7rem;
    background: #E1E9EE;
    border-radius: 2px;
    width: 17rem;
  }
  i {
    position: absolute;
    top: 50%;
    left: .3rem;
    transform: translateY(-50%);
  }
`;

export const NavSection = styled.nav`
  display: flex;
  align-content: center;
  align-items: baseline;
`;

export const NavItem = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.lightGrey};
  text-decoration: none;
  height: 100%;
  padding: 0 .6rem;
  &:hover {
    color: white !important;
  }
  ${props => !!props.selected && `
    color: white;
    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      width: 100%;
      height: 4px;
      background: ${props.theme.lightGrey};
    }
  `}
  
  i {
    order: 1;
    flex-grow: 2;
    font-size: 1.5rem;
    &::before {
      top: .4rem;
      position: relative;
    }
  }
  p {
    font-family: sans-serif, Arial, Helvetica;
    font-size: .8rem;
    order: 2;
    margin: 0 0 5px 0;
  }
`;

export const Header = styled.h2`
  font-family: "neotericbold" !important;
  color: rgb(21, 67, 104);
  font-size: 2em;
`;
