import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import SidePannel from "../components/SidePannel";
import { Grid } from "@mui/material";

function Dashboard() {
  const auth = useAuth();

  useEffect(() => { });

  return (
    <>
      <Grid container>
        <Grid size={2.5}>
          <SidePannel />
        </Grid>
        <Grid size={9.5}>
          Dashboard
          </Grid>
      </Grid>

    </>
  );
}

export default Dashboard;
