import ReactMarkdown from "react-markdown";
import { StyledCenteredTextModule } from "./CenteredTextModule.style";
import {
    ActionType,
    ContentModule,
    ExternalLink,
    FormType,
    Modal,
    PageLink,
    Action,
} from "../../core/services/contentful/queries/getModulesByPageId";
import { Button, Form, Link } from "../../components";
import { PaymentSlip } from "containers/PaymentSlip/PaymentSlip";
import { useState } from "react";

interface Props {
    moduleEntry: ContentModule;
}

export const CenteredTextModule = (props: Props) => {
    const { moduleEntry } = props;
    const { header, paragraph, backgroundColor, backgroundImage, primaryAction, secondaryAction } =
        moduleEntry;
    const [isPaymentSlipOpen, setIsPaymentSlipOpen] = useState(false);

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
                                darkMode={backgroundColor === "primary" ? false : true}
                            ></Form>
                        );
                    case FormType.Donate:
                        return (
                            <Form
                                showSizeDropdown
                                darkMode={backgroundColor === "primary" ? false : true}
                            ></Form>
                        );
                    case FormType.PaymentSlip:
                        return (
                            <>
                                <PaymentSlip
                                    isOpen={isPaymentSlipOpen}
                                    closeModalDialog={() => setIsPaymentSlipOpen(false)}
                                />
                                <Button
                                    text="Doniraj"
                                    variant="accent"
                                    onClick={() => setIsPaymentSlipOpen(true)}
                                />
                            </>
                        );
                    case FormType.Quiz:
                        // Todo: Quiz
                        return;
                    default:
                        return null;
                }
            default:
                return null;
        }
    };

    return (
        <StyledCenteredTextModule className={backgroundColor} imageUrl={backgroundImage?.url}>
            <h2>{header}</h2>
            {paragraph && <ReactMarkdown>{paragraph}</ReactMarkdown>}
            {actionElement(primaryAction)}
            {actionElement(secondaryAction)}
        </StyledCenteredTextModule>
    );
};
