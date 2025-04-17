import React from "react";
import {
  Route,
  Link,
  useParams,
  RouteProps,
  useHistory,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface AuthRouteProps extends RouteProps {
  redirectPath?: string;
}

const AuthRoute: React.FC<AuthRouteProps> = ({
  redirectPath = "/dashboard",
  ...routeProps
}) => {
  const token = localStorage.getItem("token");
  const params = useParams();
  const history = useHistory();
  if (token) {
    history.push(redirectPath);
  }

  return <Route {...routeProps} />;
};

export default AuthRoute;
