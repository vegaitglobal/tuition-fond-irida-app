import { ReactNode } from "react";
import { StyledIconButton } from "./IconButton.style";

interface Props {
    icon: ReactNode;
    url?: string;
}
export const IconButton = (props: Props) => {
    const { icon, url } = props;

    const iconElement = url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {icon}
        </a>
    ) : (
        icon
    );

    return <StyledIconButton>{iconElement}</StyledIconButton>;
};
