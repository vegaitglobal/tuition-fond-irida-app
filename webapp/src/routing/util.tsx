import { Route } from "react-router-dom";
import { Page } from "../pages";
import { PageReferenceEntry } from "../core/services/contentful/queries/getPageReferences";
import { ReactNode } from "react";
import {
    CenteredTextModule,
    SplitTextLeftModule,
    SplitTextModule,
    SplitTextRightModule,
    TextPosition,
} from "../containers";
import { ContentModule } from "../core/services/contentful/queries/getModulesByPageId";

export const mapPagesToRoutes = (pages: PageReferenceEntry[]) => {
    return pages.map((page) => {
        return (
            <Route
                key={page.path}
                index={page.path === "/"}
                path={page.path}
                element={mapContentfulPageToPage(page)}
            />
        );
    });
};

const mapContentfulPageToPage = (page: PageReferenceEntry) => {
    return <Page key={page.sys.id} pageId={page.sys.id} />;
};

export const getModuleEntryComponent = (module: ContentModule, key: string): ReactNode => {
    switch (module.layout) {
        case "split-text-left":
            return (
                <SplitTextModule textPosition={TextPosition.left} key={key} moduleEntry={module} />
            );
        case "split-text-right":
            return (
                <SplitTextModule textPosition={TextPosition.right} key={key} moduleEntry={module} />
            );
        case "right":
            // TODO
            return <SplitTextRightModule />;
        case "left":
            // TODO
            return <SplitTextLeftModule />;
        case "centered":
            return <CenteredTextModule key={key} moduleEntry={module} />;
        default:
            return <div key={key}>Blank</div>;
    }
};
