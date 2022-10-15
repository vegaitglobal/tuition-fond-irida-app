import { StyledHamburgerMenu } from "./HamburgerMenu.style";
import { ReactComponent as HamburgerMenuIcon } from "assets/images/hamburger.svg";
import { useState } from "react";
import closeIcon from "assets/images/close.svg";
import { Link } from "../Link/Link";
import { HeaderLogo } from "../Header/HeaderLogo";

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
            <HeaderLogo />
            <button className="hamburger-button" onClick={onHamburgerButtonClick}>
                <HamburgerMenuIcon />
            </button>
            <div className={`hamburger-menu-content ${opened ? "opened" : "closed"}`}>
                <button className="hamburger-close-button" onClick={closeHamburgerMenu}>
                    <img src={closeIcon} alt="close" />
                </button>

                <div className="hamburger-menu-links">
                    <Link to="/kontakt" text="Kontaktiraj nas" onClick={closeHamburgerMenu} />
                    <Link to="/o-nama" text="O nama" onClick={closeHamburgerMenu} />
                    <Link to="/blog" text="Blog" onClick={closeHamburgerMenu} />

                    <div className="hamburger-menu-links-buttons">
                        <Link
                            to="/kontakt"
                            text="Kontaktiraj nas"
                            type="button"
                            onClick={closeHamburgerMenu}
                        />
                        <Link
                            to="/doniraj"
                            text="Doniraj"
                            type="button"
                            variant="accent"
                            onClick={closeHamburgerMenu}
                        />
                    </div>
                </div>
            </div>
        </StyledHamburgerMenu>
    );
};
