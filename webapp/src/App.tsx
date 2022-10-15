import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style";
import { Routes } from "./routing";
import { getPageReferences } from "./core/services/contentful/contentful.service";

const App = () => {
    const [pages, setPages] = useState<string[]>([]);

    useEffect(() => {
        getPageReferences()
            .then((res) => {
                setPages(res);
            })
            .catch((err) => {
                // oops
                console.log(err);
            });
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Routes pages={pages} />
        </ThemeProvider>
    );
};

export default App;
