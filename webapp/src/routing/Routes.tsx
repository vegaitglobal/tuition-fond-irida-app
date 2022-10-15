import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";
import { HomePage } from "../pages";
import { Layout } from "./Layout";

interface Props {
    pages: string[];
}
export const Routes = ({ pages }: Props) => {
    const routes = pages.map((pagePath) => (
        <Route key={pagePath} index path={pagePath} element={<HomePage />} />
    ));

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
