import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button variant="outline-primary" onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

export default LoginButton;
