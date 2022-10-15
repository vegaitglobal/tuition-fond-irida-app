import { HeaderLink } from "./HeaderLink";
import { HeaderLogo } from "./HeaderLogo";
import { StyledHeader } from "./Header.style";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <div className="header-desktop">
                <HeaderLogo />
                <HeaderLink to="/o-nama" text="O nama" />
                <HeaderLink to="/o-nama" text="O nama" />
                <HeaderLink to="/blog" text="Blog" />
                <HeaderLink to="/kontakt" text="Kontaktiraj nas" type="button" />
            </div>

            <HamburgerMenu />
        </StyledHeader>
    );
};
