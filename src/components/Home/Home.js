import { Button, Box } from "@mui/material";

import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Work />
            <Skills />
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
