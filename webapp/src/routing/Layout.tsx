import {Outlet} from "react-router-dom";
import {Footer, Header} from "../components";
import {PageReferenceEntry} from "../core/services/contentful/queries/getPageReferences";

export const Layout = ({pages}: {pages: PageReferenceEntry[]}) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer pages={pages}/>
        </>
    );
};
