import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  Button,
  Feature,
  Text,
  TextLink,
  FeatureCallout,
  Group,
  Profile,
  Picture,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

export default Header;

Header.Frame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Feature = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

Header.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Header.Logo = ({ ...restProps }) => {
  return (
    <Link to="/">
      <Logo {...restProps}></Logo>
    </Link>
  );
};

Header.Button = ({ to, children, ...restProps }) => {
  return (
    <Button to={to} {...restProps}>
      {children}
    </Button>
  );
};

Header.TextLink = ({ children, ...restProps }) => {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.FeatureCallout = ({ children, ...restProps }) => {
  return <FeatureCallout {...restProps}>{children}</FeatureCallout>;
};

Header.Profile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = ({ src, ...restProps }) => {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};

Header.Dropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="search icon" />
      </SearchIcon>
      <SearchInput
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.PlayButton = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
