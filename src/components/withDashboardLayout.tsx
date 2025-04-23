import React from "react";
import { Grid } from "@mui/material";
import SidePannel from "../components/SidePannel";
import HeaderPannel from "../components/HeaderPannel";

const withDashboardLayout = <P extends object>(Component: React.ComponentType<P>) => {
    return function WrappedWithLayout(props: P) {
        return (
            <>
                <Grid container>
                    <Grid size={2.5}>
                        <SidePannel />
                    </Grid>
                    <Grid size={9.5}>
                        <HeaderPannel></HeaderPannel>
                        <Component {...props} />
                    </Grid>
                </Grid>

            </>
        );
    };
};

export default withDashboardLayout;
