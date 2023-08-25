import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { PageReferenceEntry } from "../core/services/contentful/queries/getPageReferences";
import {useEffect, useState} from "react";
import {LayoutEntry} from "../core/services/contentful/queries/getLayout";
import {getLayout} from "../core/services/contentful/contentful.service";

export const Layout = ({ pages }: { pages: PageReferenceEntry[] }) => {
    const [layoutEntry, setLayoutEntry] = useState<LayoutEntry | null>(null);

    useEffect(() => {
        getLayout().then(layout => setLayoutEntry(layout));
    }, []);

    return (
        <>
            {(layoutEntry ? <Header pages={layoutEntry!.headerLinksCollection?.items.map(link => ({
            text: link.label,
            variant: link.background,
            to: link.pageReference.path,
            type: link.isButton ? "button" : "link" })) } /> : <></>)}
            <Outlet />
            <Footer pages={pages} appDescription={layoutEntry?.appDescription} contactInformation={layoutEntry?.contactInformationCollection?.items ?? []} />
        </>
    );
};
