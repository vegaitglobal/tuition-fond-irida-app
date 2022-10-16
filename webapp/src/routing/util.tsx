import { Route } from "react-router-dom";
import { Page } from "../pages";
import { PageReferenceEntry } from "../core/services/contentful/queries/getPageReferences";
import { ReactNode } from "react";
import {
    CenteredTextModule,
    SplitTextLeftModule,
    SplitTextModule,
    SplitTextRightModule,
    TextPosition
} from "../containers";
import { ContentModule } from "../core/services/contentful/queries/getModulesByPageId";

export const mapPagesToRoutes = (pages: PageReferenceEntry[]) => {
    const allPages = pages.reduce((previousValue, currentValue) => {
        if (!currentValue.path.includes("/:")) return [...previousValue, currentValue];

        return [
            ...previousValue,
            currentValue,
            {
                path: currentValue.path.split("/:")[0],
                sys: currentValue.sys,
                //TODO: specific title
                title: currentValue.title,
            },
        ];
    }, [] as PageReferenceEntry[]);

    return allPages.map((page) => {
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

export const getModuleEntryComponent = (module: ContentModule): ReactNode => {
    switch (module.layout) {
        case "split-text-left":
            return <SplitTextModule textPosition={TextPosition.left} key={module.header} moduleEntry={module}/>;
        case "split-text-right":
            return <SplitTextModule textPosition={TextPosition.right} key={module.header} moduleEntry={module}/>;
        case "right":
            // TODO
            return <SplitTextRightModule />;
        case "left":
            // TODO
            return <SplitTextLeftModule />;
        case "centered":
            return <CenteredTextModule key={module.header} moduleEntry={module} />;
        default:
            return <div key={`module-${module.header}`}>Blank</div>;
    }
};
