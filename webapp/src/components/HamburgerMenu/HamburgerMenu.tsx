import { StyledHamburgerMenu } from "./HamburgerMenu.style";
import { ReactComponent as HamburgerMenuIcon } from "assets/images/hamburger.svg";

export const HamburgerMenu = () => {
    return (
        <StyledHamburgerMenu>
            <button>
                <HamburgerMenuIcon />
            </button>
        </StyledHamburgerMenu>
    );
};
