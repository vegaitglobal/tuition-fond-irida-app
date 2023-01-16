import { useEffect, useState } from "react";
import { getModulesByPageId } from "../core/services/contentful/contentful.service";
import {
    ContentModule,
    Module,
    ModuleType,
} from "../core/services/contentful/queries/getModulesByPageId";
import { getModuleEntryComponent } from "../routing/util";
import { ProductsSection } from "./DonatePage/ProductsSection";
import { BlogsSection } from "./BlogsPage/BlogsSection";
import { useParams } from "react-router-dom";
import { BlogDetailsPage } from "./BlogsDetailsPage/BlogDetailsPage";

interface Props {
    pageId: string;
}

export const Page = (props: Props) => {
    const { pageId } = props;
    const params = useParams();
    const [modules, setModules] = useState<Module[]>([]);

    useEffect(() => {
        getModulesByPageId(pageId).then((modules) => {
            setModules(modules);
        });
    }, [pageId]);

    const mappedModules = modules.map((m, index) => {
        const key = index + pageId + m.__typename;

        if (m.__typename === ModuleType.Content) {
            return getModuleEntryComponent(m as ContentModule, key);
        } else if (m.__typename === ModuleType.Products) {
            return <ProductsSection />;
        } else if (m.__typename === ModuleType.Blogs && !params.id) {
            return <BlogsSection key={key} />;
        } else if (params.id) {
            return <BlogDetailsPage key={key} />;
        } else {
            return null;
        }
    });

    return <>{mappedModules}</>;
};
