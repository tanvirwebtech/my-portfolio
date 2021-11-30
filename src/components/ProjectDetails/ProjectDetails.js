import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Chip, Grid, Button } from "@mui/material";
import { useParams } from "react-router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageIcon from "@mui/icons-material/Language";
import DnsIcon from "@mui/icons-material/Dns";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectDetails = () => {
    const [singleProject, setSingleProject] = useState({});
    const [open, setOpen] = React.useState(false);
    const [screenshot, setScreentshot] = useState("");

    const handleToggle = (num) => {
        if (num === "1") {
            setScreentshot("");
            setScreentshot(singleProject.screenshot1);
            setOpen(!open);
        }
        if (num === "2") {
            setScreentshot("");
            setScreentshot(singleProject.screenshot2);
            setOpen(!open);
        }
        if (num === "3") {
            setScreentshot("");
            setScreentshot(singleProject.screenshot3);
            setOpen(!open);
        }
    };
    const { id } = useParams();
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                setNewProject(data);
            });
    }, []);
    const setNewProject = (data) => {
        const project = data.find((project) => project.id == id);
        setSingleProject(project);
    };
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            <Container>
                <Typography variant="h2">
                    {singleProject?.projectName}
                </Typography>
                <Box sx={{ width: "50%", mx: "auto" }}>
                    {open && (
                        <Box sx={{ height: "400px", overflowY: "scroll" }}>
                            <img
                                src={screenshot}
                                alt={singleProject.projectName}
                                style={{ width: "100%" }}
                            />
                        </Box>
                    )}
                </Box>
                <Box sx={{ my: 2 }}>
                    <Button
                        sx={{ mx: 1 }}
                        variant="contained"
                        onClick={() => handleToggle("1")}
                    >
                        View Screenshot1
                    </Button>
                    <Button
                        sx={{ mx: 1 }}
                        variant="contained"
                        onClick={() => handleToggle("2")}
                    >
                        View Screenshot2
                    </Button>
                    <Button
                        sx={{ mx: 1 }}
                        variant="contained"
                        onClick={() => handleToggle("3")}
                    >
                        View Screenshot3
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                    }}
                >
                    <Typography variant="h5">Technology Used: </Typography>
                    {singleProject?.technology?.map((tech, index) => (
                        <Chip
                            color="primary"
                            variant="outlined"
                            key={index}
                            label={tech}
                            sx={{ ml: 1 }}
                        />
                    ))}
                </Box>
                <Box sx={{ my: 3 }}>
                    <Grid container spacing={3}>
                        <Grid item md={8} sm={6} xs={12}>
                            <Typography variant="h5">Description</Typography>
                            <Typography variant="body1" sx={{ p: 2 }}>
                                {singleProject.desc1}
                            </Typography>
                            <Typography variant="body1" sx={{ p: 2 }}>
                                {singleProject.desc2}
                            </Typography>
                        </Grid>
                        {matches ? (
                            <Grid item md={4} sm={6} xs={12}>
                                <Box sx={{ textAlign: "left" }}>
                                    <Typography variant="h5">
                                        <a href={singleProject.liveLink}>
                                            Live Website Link
                                        </a>
                                    </Typography>
                                    <Typography variant="h5">
                                        <a href={singleProject.githubClient}>
                                            Client Side Github Repo
                                        </a>
                                    </Typography>
                                    <Typography variant="h5">
                                        <a href={singleProject.githubServer}>
                                            Server Side Github Repo
                                        </a>
                                    </Typography>
                                </Box>
                            </Grid>
                        ) : (
                            <Grid
                                item
                                md={4}
                                sm={6}
                                xs={12}
                                sx={{
                                    borderLeft: "1px solid",
                                }}
                            >
                                <Box sx={{ textAlign: "left", my: 1 }}>
                                    <Typography variant="h5">
                                        <a href={singleProject.liveLink}>
                                            <Button variant="contained">
                                                <LanguageIcon /> Live Website
                                            </Button>
                                        </a>
                                    </Typography>
                                    <Typography variant="h5" sx={{ my: 1 }}>
                                        <a href={singleProject.githubClient}>
                                            <Button variant="contained">
                                                <GitHubIcon />
                                                Client Side Github Repo
                                            </Button>
                                        </a>
                                    </Typography>
                                    <Typography variant="h5" sx={{ my: 1 }}>
                                        <a href={singleProject.githubServer}>
                                            <Button variant="contained">
                                                <DnsIcon /> Server Side Github
                                                Repo
                                            </Button>
                                        </a>
                                    </Typography>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default ProjectDetails;
