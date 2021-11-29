import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";

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
    return (
        <>
            <ThemeProvider theme={theme}>
                {" "}
                <BrowserRouter>
                    <Header></Header>
                    <div className="App" style={{ marginTop: "4.5rem" }}>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
