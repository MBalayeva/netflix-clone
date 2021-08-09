import React from "react";
import {
  Container,
  Base,
  Title,
  Text,
  TextSmall,
  Input,
  Link,
  Submit,
  Error,
} from "./styled/form";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Form;

Form.Base = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Input = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

Form.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Form.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};
