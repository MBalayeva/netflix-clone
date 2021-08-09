import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import * as ROUTES from "./constansts/routes";
import { ProtectedRoutes, IsUserLoggedIn } from "./helpers/routes";
import useAuthListener from "./hooks/auth-listener";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Signin = lazy(() => import("./pages/Signin"));
  const Signup = lazy(() => import("./pages/Signup"));
  const Browse = lazy(() => import("./pages/Browse"));

  const user = useAuthListener();

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Switch>
        <IsUserLoggedIn
          user={user}
          exact
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserLoggedIn>
        <IsUserLoggedIn
          user={user}
          exact
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGNIN}
        >
          <Signin />
        </IsUserLoggedIn>
        <IsUserLoggedIn
          user={user}
          exact
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGNUP}
        >
          <Signup />
        </IsUserLoggedIn>
        <ProtectedRoutes user={user} exact path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoutes>
      </Switch>
    </Suspense>
  );
}

export default App;
