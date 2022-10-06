import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">Irida - Putevima devojcica</div>
        </ThemeProvider>
    );
};

export default App;
