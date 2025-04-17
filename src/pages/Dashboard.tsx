import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Box } from "@mui/material";

function Dashboard() {
  const auth = useAuth();

  useEffect(() => {});

  return (
    <>
      {auth.loading && !auth.currentUser ? (
        <p>loading...</p>
      ) : (
        <Box>{auth.currentUser?.username}</Box>
      )}
    </>
  );
}

export default Dashboard;
