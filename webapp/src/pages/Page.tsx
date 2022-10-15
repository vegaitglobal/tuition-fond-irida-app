import { useEffect, useState } from "react";
import { getModulesByPageId } from "../core/services/contentful/contentful.service";
import { ModuleEntry } from "../core/services/contentful/queries/getModulesByPageId";
import { getModuleComponent } from "../routing/util";

interface Props {
    pageId: string;
}
export const Page = (props: Props) => {
    const { pageId } = props;

    const [modules, setModules] = useState<ModuleEntry[]>([]);

    const mappedModules = modules.map((m) => getModuleComponent(m));

    useEffect(() => {
        getModulesByPageId(pageId).then((modules) => {
            setModules(modules);
        });
    }, []);

    return <>{mappedModules}</>;
};
