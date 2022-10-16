import { StyledCenteredTextModule } from "./CenteredTextModule.style";
import { ContentModule } from "../../core/services/contentful/queries/getModulesByPageId";
import { Link } from "../../components";

interface Props {
    moduleEntry: ContentModule;
}

export const CenteredTextModule = (props: Props) => {
    const { moduleEntry } = props;
    const { header, paragraph, backgroundColor, backgroundImage, primaryAction, secondaryAction } =
        moduleEntry;

    console.log({ primaryAction, secondaryAction });
    console.log({ backgroundImage });

    const primaryActionElement = primaryAction && (
        <Link
            variant="primary"
            type="button"
            to={primaryAction.pageReference?.path || "/"}
            text={primaryAction.label}
        />
    );

    const secondaryActionElement = secondaryAction && (
        <Link
            variant="outline"
            type="button"
            to={secondaryAction.pageReference?.path || "/"}
            text={secondaryAction.label}
        />
    );

    return (
        <StyledCenteredTextModule className={backgroundColor} imageUrl={backgroundImage?.url}>
            <h2>{header}</h2>
            {paragraph && <p>{paragraph}</p>}
            {primaryActionElement}
            {secondaryActionElement}
        </StyledCenteredTextModule>
    );
};
