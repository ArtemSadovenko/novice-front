import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

function Login() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLoginClick = () => {
    auth.login(email, password);
    history.push("/dashboard")
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: 'background.default',
      }}
    >
      <Grid container>
        <Grid size={6} sx={{ height: "100vh" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2">NOVICE</Typography>
          </Box>
        </Grid>
        <Grid
          size={6}
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding:"30px 20px 30px 20px",
              flexDirection: "column",
              bgcolor:'background.paper',
               
            }}
          >

              <TextField
                title="Email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                    padding:"20px 0px 20px 0px"
                }}
              />
              <TextField
                title="Password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                    padding:"0px 0px 20px 0px"
                }}
              />
              <Button variant="outlined" onClick={handleLoginClick}
              sx={{
                width:"100%"
              }}
              >Login</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
