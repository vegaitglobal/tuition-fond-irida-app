import { Route } from "react-router-dom";
import { Page } from "../pages";
import { ModuleEntry, PageEntry } from "../core/services/contentful/queries/getPageReferences";
import { ReactNode } from "react";
import { CenteredTextModule, SplitTextLeftModule, SplitTextRightModule } from "../containers";

export const mapPagesToRoutes = (pages: PageEntry[]) => {
    return pages.map((page) => {
        return (
            <Route
                key={page.path}
                index={page.path === "/"}
                path={page.path}
                element={mapPathToComponent(page.modulesCollection.items, page.path)}
            />
        );
    });
};

const mapPathToComponent = (modules: ModuleEntry[], key: string) => {
    const moduleNodes = modules.map((m) => getModuleComponent(m));
    return <Page key={key} modules={moduleNodes} />;
};

export const getModuleComponent = (module: ModuleEntry): ReactNode => {
    switch (module.layout) {
        case "split-text-left":
            return <SplitTextLeftModule />;
        case "split-text-right":
            return <SplitTextRightModule />;
        case "centered":
            return <CenteredTextModule />;
        case "left":
        case "right":
        default:
            return <div key={`module-${module.header}`}>Blank</div>;
    }
};
