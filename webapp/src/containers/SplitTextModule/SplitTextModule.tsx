import { Link } from "components";
import { ContentModule } from "core/services/contentful/queries/getModulesByPageId";
import { StyledSplitTextModule } from "./SplitTextModule.style";
import Markdown from "markdown-to-jsx";

export enum TextPosition {
    "left",
    "right"
}

interface Props {
    textPosition: TextPosition;
    moduleEntry: ContentModule;
}
export const SplitTextModule = (props: Props) => {
    const { textPosition, moduleEntry } = props;
    const { header, paragraph, backgroundImage, backgroundColor, primaryAction } = moduleEntry;
    console.log(backgroundColor);

    const primaryActionElement = primaryAction && (
        <Link
            variant={backgroundColor == "secondary" ? "primary" : "secondary"}
            type="button"
            to={primaryAction.pageReference?.path || "/"}
            text={primaryAction.label}
        />
    );
    const style = backgroundColor == "secondary" ? "secondary" : "primary";

    return (
        <>
            {textPosition == TextPosition.left ? (
                <StyledSplitTextModule>
                    <div className={backgroundColor == "secondary" ? "secondary" : "primary"}>
                        <img src={backgroundImage?.url} alt={header} />
                        <div className={style}>
                            <div className="content">

                                <h1 >{header}</h1>
                                <Markdown>{paragraph || ""}</Markdown>
                                {primaryActionElement}
                            </div>
                        </div>
                    </div>
                </StyledSplitTextModule>
            ) : (
                <StyledSplitTextModule>
                    <div className={backgroundColor == "secondary" ? "secondary" : "primary"}>
                        <div className={backgroundColor == "secondary" ? "secondary" : "primary"}>
                            <div className="content">
                                <h1>{header}</h1>
                                <p>{paragraph}</p>
                                {primaryActionElement}
                            </div>
                        </div>
                        <img src={backgroundImage?.url} alt={header} />
                    </div>
                </StyledSplitTextModule >
            )
            }
        </>
    )
};
