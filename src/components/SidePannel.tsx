import React from 'react'
import { Box, Button, IconButton } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CupIcon from '@mui/icons-material/EmojiEvents';
import TopIcon from '@mui/icons-material/WorkspacePremium';

function SidePannel() {
    return (
        <>
            <Box sx={{
                display:"flex",
                height:"100vh",
                bgcolor:"secondary.main",
                flexDirection:"column",
                width:"100%"
            }}>
                <Button 
                sx={{
                    marginTop:"60px",
                    padding:"20px 0px  20px 0px"
                }} 
                startIcon={<DashboardIcon />}>Dashboard</Button>
                <Button
                sx={{
                    padding:"20px 0px  20px 0px"
                }} 
                startIcon={<CupIcon />}>Tounaments</Button>
            
            <Button
                sx={{
                    padding:"20px 0px  20px 0px"
                }} 
                startIcon={<TopIcon />}>Top players</Button>
            </Box>
        </>
    )
}

export default SidePannel
