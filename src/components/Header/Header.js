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
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { HashLink } from "react-router-hash-link";
import tanvir from "../../images/tanvir-full.png";
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
        link: {
            textDecoration: "none",
            margin: "0 5px",
        },
    });
    const { menuIcon, link } = useStyles();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            className={menuIcon}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box>
                            <HashLink to="/#home">
                                <img
                                    src={tanvir}
                                    alt="tanvir"
                                    style={{ width: "50px" }}
                                />
                            </HashLink>
                        </Box>
                        <Box sx={{ ml: "auto" }}>
                            <HashLink className={link} to="/#home">
                                Home
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
