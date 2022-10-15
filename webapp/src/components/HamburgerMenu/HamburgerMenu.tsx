import { StyledHamburgerMenu } from "./HamburgerMenu.style";
import { ReactComponent as HamburgerMenuIcon } from "assets/images/hamburger.svg";
import { useState } from "react";

export const HamburgerMenu = () => {
    const [opened, setOpened] = useState<boolean>(false);

    const onHamburgerButtonClick = () => {
        setOpened(true);
    };

    return (
        <StyledHamburgerMenu>
            <button onClick={onHamburgerButtonClick}>
                <HamburgerMenuIcon />
            </button>
            <div className={`hamburger-menu-content ${opened ? "opened" : "closed"}`}>
                Menu content
            </div>
        </StyledHamburgerMenu>
    );
};
