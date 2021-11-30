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
import { Link } from "react-router-dom";

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
                <Box>
                    <Grid container spacing={3} >
                        {projects.map((project) => (
                            <Grid key={project.id} item xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        borderRadius: 0,
                                        "&:hover": {
                                            boxShadow:
                                                "10px 9px 63px 12px rgba(255,129,5,0.54)",
                                        },
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
                                            {project.desc1.slice(0, 100) +
                                                "..."}
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
                                        <Link to={`/project/${project.id}`}>
                                            <Button size="small">
                                                View Details
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Work;
