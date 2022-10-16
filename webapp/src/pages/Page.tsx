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
    console.log("params");
    console.log(params);

    const [modules, setModules] = useState<Module[]>([]);

    useEffect(() => {
        getModulesByPageId(pageId).then((modules) => {
            setModules(modules);
        });
    }, []);

    const mappedModules = modules.map((m) => {
        switch (m.__typename) {
            case ModuleType.Content:
                return getModuleEntryComponent(m as ContentModule);

            case ModuleType.Products:
                return <ProductsSection />;

            case ModuleType.Blogs:
                return params.id ? <BlogDetailsPage /> : <BlogsSection />;

            default:
                return null;
        }
    });

    return <>{mappedModules}</>;
};
