import { Link as RouterLink } from "react-router-dom";
import { StyledLink } from "./Link.style";

interface Props {
    to: string;
    text: string;
    onClick?: () => void;
    type?: "link" | "button";
    variant?: "accent" | "light" | "outline" | "primary";
    external?: boolean;
}
export const Link = (props: Props) => {
    const { to, text, type = "link", variant = "light", onClick, external = false } = props;

    return (
        <StyledLink onClick={onClick}>
            <div className={`${type === "button" ? "button-link" : "link"} ${variant}`}>
                <RouterLink to={to}>{text}</RouterLink>
            </div>
        </StyledLink>
    );
};
