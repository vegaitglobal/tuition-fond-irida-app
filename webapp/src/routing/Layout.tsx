import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { HamburgerMenu } from "../components/HamburgerMenu/HamburgerMenu";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
