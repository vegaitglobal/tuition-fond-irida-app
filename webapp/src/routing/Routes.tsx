import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";
import { Layout } from "./Layout";
import { mapPagesToRoutes } from "./util";
import { PageReferenceEntry } from "../core/services/contentful/queries/getPageReferences";
import { useEffect, useState } from "react";
import { getPageReferences } from "../core/services/contentful/contentful.service";

export const Routes = () => {
    const [pages, setPages] = useState<PageReferenceEntry[]>([]);

    // TODO: Create Loading spinner
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

    const routes = mapPagesToRoutes(pages);

    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route path="/" element={<Layout />}>
                    {routes}
                </Route>
            </BrowserRoutes>
        </BrowserRouter>
    );
};
