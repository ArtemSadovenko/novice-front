import React from 'react';
import { Route, Link, useParams, RouteProps, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

interface ProtectedRouteProps extends RouteProps {
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/login",
  ...routeProps
}) => {
  const { currentUser } = useAuth();
  const params = useParams();
  const history = useHistory()
  if (!currentUser) {
    history.push(redirectPath)
  }

  return <Route {...routeProps} />;
};

export default ProtectedRoute;