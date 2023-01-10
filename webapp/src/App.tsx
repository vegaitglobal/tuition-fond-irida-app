import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style";
import { Routes } from "./routing";
import { Loader } from "./components";

const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </Suspense>
    );
};

export default App;
