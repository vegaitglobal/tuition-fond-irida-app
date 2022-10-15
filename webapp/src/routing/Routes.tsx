import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";
import { HomePage } from "../pages";
import { Layout } from "./Layout";
import { Page } from "../core/models/page";

interface Props {
    pages: Page[];
}
export const Routes = ({ pages }: Props) => {
    const routes = pages.map((page) => {
        return (
            <Route
                key={page.path}
                index={page.path === "/"}
                path={page.path}
                element={<HomePage />}
            />
        );
    });

    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route path="/" element={<Layout />}>
                    {routes}
                    {/*<Route index element={<HomePage />} />*/}
                    {/*<Route path="/o-nama" element={<AboutUsPage />} />*/}
                    {/*<Route path="/blog" element={<BlogPage />} />*/}
                    {/*<Route path="/kontakt" element={<ContactPage />} />*/}
                    {/*<Route path="/doniraj" element={<DonatePage />} />*/}
                </Route>
            </BrowserRoutes>
        </BrowserRouter>
    );
};
