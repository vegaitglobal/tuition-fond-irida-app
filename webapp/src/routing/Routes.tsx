import {BrowserRouter, Route, Routes as BrowserRoutes} from "react-router-dom";
import {AboutUsPage, HomePage} from "../pages";
import {Layout} from "./Layout";

export const Routes = () => {
    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/o-nama" element={<AboutUsPage/>}/>
                </Route>
            </BrowserRoutes>
        </BrowserRouter>
    );
};
