import { Route } from "react-router-dom";
import { Page } from "../pages";
import { PageReferenceEntry } from "../core/services/contentful/queries/getPageReferences";
import { ReactNode } from "react";
import { CenteredTextModule, SplitTextLeftModule, SplitTextRightModule } from "../containers";
import { ModuleEntry } from "../core/services/contentful/queries/getModulesByPageId";

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

export const getModuleComponent = (module: ModuleEntry): ReactNode => {
    switch (module.layout) {
        case "split-text-left":
        case "left":
            return <SplitTextLeftModule />;
        case "split-text-right":
        case "right":
            return <SplitTextRightModule />;
        case "centered":
            return <CenteredTextModule key={module.header} moduleEntry={module} />;
        default:
            return <div key={`module-${module.header}`}>Blank</div>;
    }
};
