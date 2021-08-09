import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserLoggedIn({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) return children;

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoutes({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) return children;

        if (!user) {
          return (
            <Redirect to={{ pathname: "sign-in", state: { from: location } }} />
          );
        }

        return null;
      }}
    />
  );
}
