import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { StyledHeaderLink } from "./Header.style";

interface Props {
    to: string;
    text: string;
    type?: "link" | "button";
}
export const HeaderLink = (props: Props) => {
    const { to, text, type = "link" } = props;

    return (
        <StyledHeaderLink>
            <Link to={to}>{type === "link" ? text : <Button text={text} variant="light" />}</Link>
        </StyledHeaderLink>
    );
};
