import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import AuthRoute from "./components/AuthRoute";
import TopPage from "./pages/TopPage";
import Tournaments from "./pages/Tournaments";
import Register from "./pages/Register";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>

              <AuthRoute path="/login" component={Login} />
              <AuthRoute path="/register" component={Register} />
              <ProtectedRoute
                path="/dashboard"
                component={Dashboard}
              />
              <ProtectedRoute
                path="/toplist"
                component={TopPage}
              />
              <ProtectedRoute
                path="/tournaments"
                component={Tournaments}
              />
            </Switch>
          </Router>
        </AuthProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
