import { HeaderLogo } from "./HeaderLogo";
import { StyledHeader } from "./Header.style";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { Link } from "../Link/Link";

export const Header = () => {
    return (
        <StyledHeader>
            <div className="header-desktop">
                <HeaderLogo />
                <Link to="/doniraj" text="Doniraj" />
                <Link to="/o-nama" text="O nama" />
                <Link to="/blog" text="Blog" />
                <Link to="/kontakt" text="Kontaktiraj nas" type="button" />
            </div>

            <HamburgerMenu />
        </StyledHeader>
    );
};
