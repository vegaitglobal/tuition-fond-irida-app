import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style";
import { Routes } from "./routing";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
};

export default App;
