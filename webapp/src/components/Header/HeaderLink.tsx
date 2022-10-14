import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { StyledHeaderLink } from "./Header.style";

interface Props {
    to: string;
    text: string;
    style?: "link" | "button";
}
export const HeaderLink = (props: Props) => {
    const { to, text, style = "link" } = props;

    return (
        <StyledHeaderLink>
            <Link to={to}>{style === "link" ? text : <Button text={text} variant="light" />}</Link>
        </StyledHeaderLink>
    );
};
