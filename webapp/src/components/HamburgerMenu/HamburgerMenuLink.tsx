import { Link } from "react-router-dom";
import { StyledHamburgerMenuLink } from "./HamburgerMenu.style";

export const HamburgerMenuLink = () => {
    return (
        <StyledHamburgerMenuLink>
            <Link to="/">Link text</Link>
        </StyledHamburgerMenuLink>
    );
};
