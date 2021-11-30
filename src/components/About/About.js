import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import tanvir from "../../images/tanvir.png";
//  backgroundImage: `url(${about})`,
const About = () => {
    return (
        <Box id="about" sx={{ py: 5 }}>
            <Container>
                <Typography variant="h2" sx={{ my: 3 }}>
                    About Me
                </Typography>
                <Grid container>
                    <Grid item sm={6} md={7} xs={12}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant="body1" sx={{ my: 2 }}>
                                My name is Tanvir Ahmed. I am from Sylhet,
                                Bangladesh. I have started my journey as a web
                                developer at the beginning of 2018. First, I
                                learned front-end development and built multiple
                                projects as a front-end developer. Then I
                                learned back-end development. I have already
                                done multiple full-stack projects. You will find
                                some of my projects in the WORK section.
                            </Typography>
                            <Typography variant="body1" sx={{ my: 2 }}>
                                Web design and development is my passion and I
                                am going to build my career as full-stack
                                developer. For that I'm gathering core skills
                                like html, css, vanilla javascript, react.js,
                                node.js, express.js, mongodb, tailwind css and
                                typescript. I like to learn new things. So,
                                everyday I'm improving my self.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        sm={6}
                        md={5}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                ml: 2,
                                width: "200px",
                                borderRadius: "120px",
                                border: "10px solid #f79100",
                            }}
                        >
                            <img
                                src={tanvir}
                                style={{ width: "100%" }}
                                alt=""
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
