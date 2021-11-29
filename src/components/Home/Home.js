import { Button, Box } from "@mui/material";

import React from "react";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Work from "../Work/Work";

const Home = () => {
    return (
        <>
            <Hero />
            <Work />
            <Contact />
        </>
    );
};

export default Home;

/* 

 <a
                href="./tanvir-ahmed-full-stack-developer.pdf"
                download="tanvir-resume"
            >
                <button>Download</button>
            </a>
*/
