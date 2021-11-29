import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import tanvir from "../../images/tanvir-full.png";
import DownloadIcon from "@mui/icons-material/Download";

import "./Hero.css";
const Hero = () => {
    return (
        <div className="hero" id="home">
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
                        <Box>
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
                                        }}
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
