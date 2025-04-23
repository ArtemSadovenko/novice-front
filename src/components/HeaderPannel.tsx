import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../context/AuthContext';
function HeaderPannel() {
    const auth = useAuth()
    return (
        <Box sx={{
            padding:"3px 3px 0px 3px "
        }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    bgcolor: "secondary.main",
                    borderRadius:"20px",
                    // border: "solid 1px",
                    borderColor: "black",
                    padding: "15px 20px 15px 20px"
                }}
            >
                <Typography>Profile</Typography>
                <Button endIcon={<LogoutIcon />} onClick={auth.logout}>Log out</Button>
            </Box>
        </Box>)
}

export default HeaderPannel
