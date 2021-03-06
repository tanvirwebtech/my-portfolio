import React from "react";
import {
    AppBar,
    IconButton,
    Toolbar,
    Box,
    useTheme,
    Drawer,
    ListItem,
    ListItemText,
    List,
    Container,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { HashLink } from "react-router-hash-link";

import logo from "../../images/logo-tanvirwebtech.png";
const list = (
    <Box
        sx={{
            width: 250,
        }}
        role="presentation"
    >
        <List>
            <ListItem button>
                <ListItemText>
                    <HashLink style={{ textDecoration: "none" }} to="/#home">
                        Home
                    </HashLink>{" "}
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>
                    <HashLink style={{ textDecoration: "none" }} to="/#about">
                        About
                    </HashLink>{" "}
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>
                    <HashLink style={{ textDecoration: "none" }} to="/#skills">
                        {" "}
                        Skills
                    </HashLink>{" "}
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>
                    <HashLink style={{ textDecoration: "none" }} to="/#work">
                        {" "}
                        Work
                    </HashLink>{" "}
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>
                    <HashLink style={{ textDecoration: "none" }} to="/#contact">
                        {" "}
                        Contact
                    </HashLink>{" "}
                </ListItemText>
            </ListItem>
            <Divider />
        </List>
    </Box>
);
const Header = () => {
    const theme = useTheme();
    const [state, setState] = React.useState(false);

    const useStyles = makeStyles({
        menuIcon: {
            [theme.breakpoints.up("sm")]: {
                display: "none !important",
            },
        },
        navLink: {
            [theme.breakpoints.down("sm")]: {
                display: "none !important",
            },
        },
        link: {
            textDecoration: "none",
            fontWeight: "500",
            color: "#fff",
            margin: "0 10px",
            transition: "0.3s all",
            "&:hover": {
                color: "#fccddd",
            },
        },
    });
    const { menuIcon, link, navLink } = useStyles();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <AppBar position="fixed">
                        <Toolbar>
                            <Box>
                                <HashLink to="/#home">
                                    <img
                                        src={logo}
                                        alt="tanvir"
                                        style={{ width: "50px" }}
                                    />
                                </HashLink>
                            </Box>
                            <IconButton
                                className={menuIcon}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ ml: "auto" }}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ ml: "auto" }} className={navLink}>
                                <HashLink className={link} to="/#home">
                                    Home
                                </HashLink>{" "}
                                <HashLink className={link} to="/#about">
                                    About
                                </HashLink>{" "}
                                <HashLink className={link} to="/#skills">
                                    Skills
                                </HashLink>{" "}
                                <HashLink className={link} to="/#work">
                                    Works
                                </HashLink>{" "}
                                <HashLink className={link} to="/#contact">
                                    Contact
                                </HashLink>{" "}
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Container>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                        sx={{
                            backdropFilter: "blur(10px)",
                            backgroundColor: "transparent",
                        }}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Header;
