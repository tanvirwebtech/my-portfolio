import React from "react";
import { Container, Typography, Box } from "@mui/material";
const Footer = () => {
    return (
        <Box sx={{ py: 3, backgroundColor: "#5e3802" }}>
            <Container>
                <Typography
                    variant="body1"
                    sx={{ textAlign: "center", color: "#fff" }}
                >
                    This site is copyright protected | 2021
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
