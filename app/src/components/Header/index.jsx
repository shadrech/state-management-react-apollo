import React from "react";
import { Wrapper, LeftSection, SearchInput, NavSection, NavItem } from "./styles";
import Logo from "../../assets/logo.svg";

const Header = props => {
  return (
    <Wrapper>
      <LeftSection>
        <Logo />
        <SearchInput>
          <i className="fas fa-search"></i>
          <input />
        </SearchInput>
      </LeftSection>
      <NavSection>
        <NavItem to="/">
          <i className="fas fa-home"></i>
          <p>Home</p>
        </NavItem>
        <NavItem to="/">
          <i className="fas fa-building"></i>
          <p>Organizations</p>
        </NavItem>
        <NavItem to="/" selected={true}>
          <i className="fas fa-users"></i>
          <p>Workers</p>
        </NavItem>
      </NavSection>
    </Wrapper>
  );
}

export default Header;
