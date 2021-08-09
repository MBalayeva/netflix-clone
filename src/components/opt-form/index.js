import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/opt-form";

const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default OptForm;

OptForm.Input = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

OptForm.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="close" />
    </Button>
  );
};

OptForm.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = ({ ...restProps }) => {
  return <Break {...restProps} />;
};
