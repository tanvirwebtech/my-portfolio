import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Container, Box, Typography } from "@mui/material";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import skillbg from "../../images/skill-bg.jpg";
const skills = [
    { skillName: "HTML", level: 90 },
    { skillName: "CSS", level: 92 },
    { skillName: "Javascript", level: 85 },
    { skillName: "React.js", level: 80 },
    { skillName: "Node.js", level: 70 },
    { skillName: "MongoDB", level: 68 },
    { skillName: "Bootstrap", level: 90 },
    { skillName: "Express.js", level: 70 },
    { skillName: "TailWind CSS", level: 80 },
    { skillName: "Material UI", level: 85 },
];
const Skills = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor:
                theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor:
                theme.palette.mode === "light" ? "#f79100" : "#308fe8",
        },
    }));
    return (
        <Box
            id="skills"
            sx={{
                py: 4,
                backgroundImage: `url(${skillbg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Container>
                <Typography variant="h2" sx={{ my: 3 }}>
                    Skills
                </Typography>
                <Grid container spacing={3}>
                    <Grid item md={6} sm={6} xs={12}>
                        {skills
                            .slice(0, Math.floor(skills.length / 2))
                            .map((skill) => (
                                <Box
                                    sx={{
                                        width: "50%",
                                        mx: "auto",
                                        my: 1,
                                    }}
                                >
                                    <Typography variant="h5" sx={{ my: 1 }}>
                                        {skill.skillName}
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        value={skill.level}
                                    />
                                </Box>
                            ))}
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        {skills
                            .slice(Math.floor(skills.length / 2), skills.length)
                            .map((skill) => (
                                <Box sx={{ width: "50%", mx: "auto", my: 1 }}>
                                    <Typography variant="h5" sx={{ my: 1 }}>
                                        {skill.skillName}
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        value={skill.level}
                                    />
                                </Box>
                            ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
