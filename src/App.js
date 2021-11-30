import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Footer from "./components/Footer/Footer";
function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#f79100",
            },
            secondary: {
                main: "#fff",
            },
        },
    });
    theme.typography.h2 = {
        fontSize: "1.5rem",
        "@media (min-width:600px)": {
            fontSize: "1.8rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "2.5rem",
        },
    };
    theme.typography.h1 = {
        fontSize: "2.5rem",
        "@media (min-width:600px)": {
            fontSize: "2.8rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "4.2rem",
        },
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                {" "}
                <BrowserRouter>
                    <Header></Header>
                    <div className="App" style={{ marginTop: "4.5rem" }}>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route
                                path="/project/:id"
                                element={<ProjectDetails />}
                            ></Route>
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
