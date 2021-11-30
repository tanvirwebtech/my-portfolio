import {
    Container,
    Grid,
    Typography,
    Box,
    useTheme,
    Button,
} from "@mui/material";
import React from "react";
import tanvir from "../../images/tanvir-full.png";
import DownloadIcon from "@mui/icons-material/Download";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Hero.css";

import MouseParticles from "react-mouse-particles";

import { makeStyles } from "@mui/styles";

const Hero = () => {
    const theme = useTheme();
    const useStyles = makeStyles({
        button: {
            [theme.breakpoints.down("md")]: {
                backgroundColor: "#fff !important",
                color: "#f79100 !important",
            },
        },
        socialIcon: {
            transition: "0.3s all",
            "&:hover": {
                transition: "0.3s all",
                boxShadow: "3px 6px 18px 8px rgb(255 129 5 / 54%)",
            },
        },
    });
    const { button, socialIcon } = useStyles();
    return (
        <div className="hero" id="home">
            <MouseParticles
                g={1}
                color={["#f79100", "#fff", "#fa9200"]}
                cull="col,image-wrapper"
            />
            <Container>
                <Grid container spacing={2} sx={{ py: 8 }}>
                    <Grid
                        item
                        md={6}
                        sm={12}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
                            <img
                                style={{
                                    width: "100%",
                                }}
                                src={tanvir}
                                alt="Tanvir"
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        sm={12}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "left",
                        }}
                    >
                        <Box>
                            <Typography variant="body1">Hi, there</Typography>
                            <Typography variant="h1">
                                I'm Tanvir Ahmed
                            </Typography>
                            <Typography variant="h3">
                                A MERN Stack developer
                            </Typography>
                            <Box sx={{ my: 2 }}>
                                <a
                                    href="https://facebook.com/tanvirwebtech"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <FacebookIcon
                                        className={socialIcon}
                                        sx={{
                                            border: 1,
                                            mx: 2,
                                            transform: "scale(2)",
                                            color: "white",
                                        }}
                                    />
                                </a>
                                <a
                                    href="https://twitter.com/tanvirwebtech"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <TwitterIcon
                                        className={socialIcon}
                                        sx={{
                                            border: 1,
                                            mx: 2,
                                            transform: "scale(2)",
                                            color: "white",
                                        }}
                                    />
                                </a>
                                <a
                                    href="https://linkedin.com/in/tanvirwebtech"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <LinkedInIcon
                                        className={socialIcon}
                                        sx={{
                                            border: 1,
                                            mx: 2,
                                            transform: "scale(2)",
                                            color: "white",
                                        }}
                                    />
                                </a>
                                <a
                                    href="https://github.com/tanvirwebtech"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GitHubIcon
                                        className={socialIcon}
                                        sx={{
                                            border: 1,
                                            mx: 2,
                                            transform: "scale(2)",
                                            color: "white",
                                        }}
                                    />
                                </a>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <a
                                    href="./tanvir-ahmed-full-stack-developer.pdf"
                                    download="tanvir-ahmed-full-stack-developer"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            border: 0,
                                            borderRadius: 0,
                                            boxShadow: "none",
                                            mr: 1,
                                            mt: 2,
                                        }}
                                        className={button}
                                    >
                                        {" "}
                                        Download Resume
                                        {<DownloadIcon sx={{ ml: 1 }} />}
                                    </Button>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Hero;
