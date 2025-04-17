import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AuthProvider>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <ProtectedRoute
                path="/dashboard"
                // redirectPath="/login"
                component={Dashboard}
              />
            </Switch>
          </Router>
        </AuthProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
