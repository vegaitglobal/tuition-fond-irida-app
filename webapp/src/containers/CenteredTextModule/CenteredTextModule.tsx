import { StyledCenteredTextModule } from "./CenteredTextModule.style";
import { ModuleEntry } from "../../core/services/contentful/queries/getModulesByPageId";

interface Props {
    moduleEntry: ModuleEntry;
}
export const CenteredTextModule = (props: Props) => {
    const { moduleEntry } = props;
    const { header, paragraph, backgroundColor } = moduleEntry;
    return (
        <StyledCenteredTextModule className={backgroundColor}>
            <h2>{header}</h2>
            {paragraph && <p>{paragraph}</p>}
        </StyledCenteredTextModule>
    );
};
