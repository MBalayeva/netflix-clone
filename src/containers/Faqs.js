import React from "react";
import { Accordeon } from "../components";
import { OptForm } from "../components";
import { faqsData } from "../fixtures/faqs";

const FaqsContainer = () => {
  return (
    <Accordeon>
      <Accordeon.Title>Have any questions?</Accordeon.Title>
      {faqsData.map((item) => (
        <Accordeon.Item key={item.id}>
          <Accordeon.Header>{item.header}</Accordeon.Header>
          <Accordeon.Body>{item.body}</Accordeon.Body>
        </Accordeon.Item>
      ))}

      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email or create to restart your membership{" "}
        </OptForm.Text>
      </OptForm>
    </Accordeon>
  );
};

export default FaqsContainer;
