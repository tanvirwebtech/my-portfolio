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
                main: "#71DFE7",
            },
            secondary: {
                main: "#FFE652",
                contrastText: "#DADDFC",
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                {" "}
                <Header></Header>
                <div className="App" style={{ marginTop: "4.5rem" }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
