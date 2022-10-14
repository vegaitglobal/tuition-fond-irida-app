import { HeaderLink } from "./HeaderLink";
import { HeaderLogo } from "./HeaderLogo";
import { StyledHeader } from "./Header.style";

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderLogo />
            <HeaderLink to="/o-nama" text="O nama" />
            <HeaderLink to="/o-nama" text="O nama" />
            <HeaderLink to="/blog" text="Blog" />
            <HeaderLink to="/kontakt" text="Kontaktiraj nas" style="button" />
        </StyledHeader>
    );
};
