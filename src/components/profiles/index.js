import React from "react";
import { Container, Title, List, User, Picture, Name } from "./styles/profiles";

const Profiles = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Profiles;

Profiles.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = ({ children, ...restProps }) => {
  return <User {...restProps}>{children}</User>;
};

Profiles.Picture = ({ src, ...restProps }) => {
  return (
    <Picture
      src={src ? `/images/users/${src}.png` : "images/misc/loading.gif"}
      {...restProps}
    />
  );
};

Profiles.Name = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};
