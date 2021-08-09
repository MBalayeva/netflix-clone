import React from "react";
import { Container, Title, Subtitle } from "./styles/feature";

const Feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Feature;

Feature.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Feature.Subtitle = ({ children, ...restProps }) => {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};
