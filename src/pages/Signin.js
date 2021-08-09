import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constansts/routes";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "../containers/Header";
import { Form } from "../components";
import Footer from "../containers/Footer";

const Signin = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = email === "" || password === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push(ROUTES.BROWSE))
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base method="post" onSubmit={(e) => handleSubmit(e)}>
            <Form.Input
              type="email"
              value={email}
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              placeholder="Your password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid}>Submit</Form.Submit>
            <Form.Text>
              New to Netflix?{" "}
              <Form.Link to={ROUTES.SIGNUP}>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <Footer />
    </>
  );
};

export default Signin;
