import React from "react";
import FooterContainer from "../containers/Footer";
import JumbotronContainer from "../containers/Jumbotron";
import FaqsContainer from "../containers/Faqs";
import HeaderContainer from "../containers/Header";
import { OptForm, Feature } from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        {" "}
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email or create to restart your
              membership{" "}
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
