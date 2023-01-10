import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";
import { Layout } from "./Layout";
import { mapPagesToRoutes } from "./util";
import { PageReferenceEntry } from "../core/services/contentful/queries/getPageReferences";
import { useEffect, useState } from "react";
import { getPageReferences } from "../core/services/contentful/contentful.service";
import { Loader } from "../components";

export const Routes = () => {
    const [pages, setPages] = useState<PageReferenceEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getPageReferences()
            .then((res) => {
                setLoading(false);
                setPages(res);
            })
            .catch((err) => {
                // oops
                setLoading(false);
                console.log(err);
            });
    }, []);

    const routes = mapPagesToRoutes(pages);

    return (
        <BrowserRouter>
            {loading ? (
                <Loader center />
            ) : (
                <BrowserRoutes>
                    <Route path="/" element={<Layout />}>
                        {routes}
                    </Route>
                </BrowserRoutes>
            )}
        </BrowserRouter>
    );
};
