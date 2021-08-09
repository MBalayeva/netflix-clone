import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constansts/routes";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "../containers/Header";
import { Form } from "../components";
import Footer from "../containers/Footer";

const Signup = () => {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = email === "" || password === "" || firstName === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(history.push(ROUTES.BROWSE))
      .catch((error) => {
        setPassword("");
        setEmail("");
        setFirstName("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>{" "}
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base method="post" onSubmit={(e) => handleSubmit(e)}>
            <Form.Input
              type="text"
              value={firstName}
              placeholder="Your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
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
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
            <Form.Text>
              Have an account?{" "}
              <Form.Link to={ROUTES.SIGNIN}>Sign in now.</Form.Link>
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

export default Signup;
