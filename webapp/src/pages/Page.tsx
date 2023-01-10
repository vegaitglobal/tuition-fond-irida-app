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
import { useNavigate, useParams } from "react-router-dom";
import { BlogDetailsPage } from "./BlogsDetailsPage/BlogDetailsPage";
import { Loader } from "../components";

interface Props {
    pageId: string;
}

export const Page = (props: Props) => {
    const { pageId } = props;
    const params = useParams();
    const navigate = useNavigate();
    console.log("params");
    console.log(params);

    const [modules, setModules] = useState<Module[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getModulesByPageId(pageId)
            .then((modules) => {
                setModules(modules);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                navigate("/greska");
            });
    }, [pageId, navigate]);

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

    return <>{loading ? <Loader center /> : mappedModules}</>;
};
