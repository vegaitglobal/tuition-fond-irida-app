import { Form, Link } from "components";
import {
    Action,
    ActionType,
    ContentModule,
    ExternalLink,
    FormType,
    Modal,
    PageLink,
} from "core/services/contentful/queries/getModulesByPageId";
import { StyledSplitTextModule } from "./SplitTextModule.style";
import Markdown from "markdown-to-jsx";

export enum TextPosition {
    "left",
    "right",
}

interface Props {
    textPosition: TextPosition;
    moduleEntry: ContentModule;
}
export const SplitTextModule = (props: Props) => {
    const { textPosition, moduleEntry } = props;
    const { header, paragraph, backgroundImage, backgroundColor, primaryAction } = moduleEntry;

    const actionElement = (action: PageLink | ExternalLink | Modal | Action | null) => {
        switch (action?.__typename) {
            case ActionType.ExternalLink:
                return (
                    <Link
                        variant="outline"
                        type="button"
                        external={true}
                        to={(action as ExternalLink).url || "/"}
                        text={action.label}
                    />
                );
            case ActionType.PageLink:
                return (
                    <Link
                        variant={(action as PageLink).background}
                        type="button"
                        to={(action as PageLink).pageReference?.path || "/"}
                        text={action.label}
                    />
                );
            case ActionType.Modal:
                switch ((action as Modal).form) {
                    case FormType.Contact:
                        return (
                            <Form
                                showSizeDropdown={false}
                                darkMode={backgroundColor !== "primary"}
                            ></Form>
                        );
                    case FormType.Donate:
                        return (
                            <Form
                                showSizeDropdown
                                darkMode={backgroundColor !== "primary"}
                            ></Form>
                        );
                    case FormType.Quiz:
                        return;
                    default:
                        return null;
                }
            default:
                return null;
        }
    };
    const style = backgroundColor === "secondary" ? "secondary" : "primary";

    return (
        <>
            {textPosition === TextPosition.left ? (
                <StyledSplitTextModule>
                    <div className={backgroundColor === "secondary" ? "secondary" : "primary"}>
                        <img src={backgroundImage?.url} alt={header} />
                        <div className={style}>
                            <div className="content">
                                <>
                                    <h1>{header}</h1>
                                    <Markdown>{paragraph || ""}</Markdown>
                                    {actionElement(primaryAction)}
                                </>
                            </div>
                        </div>
                    </div>
                </StyledSplitTextModule>
            ) : (
                <StyledSplitTextModule>
                    <div className={backgroundColor === "secondary" ? "secondary" : "primary"}>
                        <div className={backgroundColor === "secondary" ? "secondary" : "primary"}>
                            <div className="content">
                                <>
                                    <h1>{header}</h1>
                                    <p>{paragraph}</p>
                                    {actionElement(primaryAction)}
                                </>
                            </div>
                        </div>
                        <img src={backgroundImage?.url} alt={header} />
                    </div>
                </StyledSplitTextModule>
            )}
        </>
    );
};
