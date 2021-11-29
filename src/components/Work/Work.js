import React, { useState, useEffect } from "react";
import {
    Container,
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
} from "@mui/material";

const Work = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);
    return (
        <div id="work" style={{ padding: "50px 0" }}>
            <Container>
                <Typography variant="h2" sx={{ mb: 5 }}>
                    See my recent works
                </Typography>
                <Box sx={{ mx: "auto" }}>
                    <Grid container spacing={3} sx={{ mx: "auto" }}>
                        {projects.map((project) => (
                            <Grid key={project.id} item xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        boxShadow:
                                            "10px 9px 63px 12px rgba(255,129,5,0.54)",
                                        borderRadius: 0,
                                    }}
                                >
                                    <img
                                        src={project.thumbImg}
                                        alt={project.projectName}
                                        style={{ width: "100%" }}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {project.projectName}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {project.desc.slice(0, 100) + "..."}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            style={{ textDecoration: "none" }}
                                            rel="noreferrer"
                                        >
                                            <Button size="small">
                                                View Project
                                            </Button>
                                        </a>
                                        <Button size="small">Details</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                        {/* <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    boxShadow:
                                        "10px 9px 63px 12px rgba(255,129,5,0.54)",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://picsum.photos/300"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        VirWings - Drone Market
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        VirWings is a drone selling website.
                                        Built with reactjs, nodejs, expressjs
                                        and mongodb.
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Button size="small">View Project</Button>
                                    <Button size="small">Details</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    boxShadow:
                                        "10px 9px 63px 12px rgba(255,129,5,0.54)",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://picsum.photos/300"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        VirWings - Drone Market
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        VirWings is a drone selling website.
                                        Built with reactjs, nodejs, expressjs
                                        and mongodb.
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Button size="small">View Project</Button>
                                    <Button size="small">Details</Button>
                                </CardActions>
                            </Card>
                        </Grid> */}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Work;
