import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";
import { AboutUsPage, BlogPage, ContactPage, HomePage } from "../pages";
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
                </Route>
            </BrowserRoutes>
        </BrowserRouter>
    );
};
