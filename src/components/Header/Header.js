import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Button,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                    <Button variant="contained">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
