import { StyledHamburgerMenu } from "./HamburgerMenu.style";
import { ReactComponent as HamburgerMenuIcon } from "assets/images/hamburger.svg";
import { useState } from "react";
import closeIcon from "assets/images/close.svg";
import { HamburgerMenuLink } from "./HamburgerMenuLink";
import { Button } from "../Button/Button";

export const HamburgerMenu = () => {
    const [opened, setOpened] = useState<boolean>(false);

    const onHamburgerButtonClick = () => {
        setOpened(true);
    };

    const closeHamburgerMenu = () => {
        setOpened(false);
    };

    return (
        <StyledHamburgerMenu>
            <button className="hamburger-button" onClick={onHamburgerButtonClick}>
                <HamburgerMenuIcon />
            </button>
            <div className={`hamburger-menu-content ${opened ? "opened" : "closed"}`}>
                <button className="hamburger-close-button" onClick={closeHamburgerMenu}>
                    <img src={closeIcon} alt="close" />
                </button>

                <div className="hamburger-menu-links">
                    <HamburgerMenuLink />
                    <HamburgerMenuLink />
                    <HamburgerMenuLink />

                    <Button text="Kontaktiraj nas" variant="light" />
                    <Button text="Doniraj" variant="accent" />
                </div>
            </div>
        </StyledHamburgerMenu>
    );
};
