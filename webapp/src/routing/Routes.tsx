import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";
import { AboutUsPage, BlogPage, ContactPage, DonatePage, HomePage } from "../pages";
import { Layout } from "./Layout";

export const Routes = () => {
    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/o-nama" element={<AboutUsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/kontakt" element={<ContactPage />} />
                    <Route path="/doniraj" element={<DonatePage />} />
                </Route>
            </BrowserRoutes>
        </BrowserRouter>
    );
};
