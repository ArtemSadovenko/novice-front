import React from 'react'
import { Box, Button, IconButton } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CupIcon from '@mui/icons-material/EmojiEvents';
import TopIcon from '@mui/icons-material/WorkspacePremium';
import { useHistory } from 'react-router-dom';

function SidePannel() {
    const history = useHistory();

    return (
        <>
            <Box sx={{
                padding: "3px 3px 3px 3px ",
                height: "100vh",
                position: "fixed",
                width: "20%"

            }}>
                <Box sx={{
                    display: "flex",
                    height: "100%",
                    bgcolor: "secondary.main",
                    flexDirection: "column",
                    width: "100%",
                    borderRadius: "20px",
                    padding: "0px 10px 0px 10px "
                }}>
                    <Button
                        sx={{
                            marginTop: "60px",
                            padding: "20px 0px  20px 0px"
                        }}
                        onClick={() => {
                            history.push("/dashboard")
                        }}
                        startIcon={<DashboardIcon />}>Dashboard</Button>
                    <Button
                        onClick={() => {
                            history.push("/tournaments")
                        }}
                        sx={{
                            padding: "20px 0px  20px 0px"
                        }}
                        startIcon={<CupIcon />}>Tounaments</Button>

                    <Button
                        onClick={() => {
                            history.push("/toplist")
                        }}
                        sx={{
                            padding: "20px 0px  20px 0px"
                        }}
                        startIcon={<TopIcon />}>Top players</Button>
                </Box>
            </Box>
        </>
    )
}

export default SidePannel
