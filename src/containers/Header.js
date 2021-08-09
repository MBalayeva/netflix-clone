import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constansts/routes";
import logo from "../logo.svg";

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.Button to={ROUTES.SIGNIN}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
