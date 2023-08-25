import { HeaderLogo } from "./HeaderLogo";
import { StyledHeader } from "./Header.style";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { Link, Props as LinkProps } from "../Link/Link";

export const Header = ({ pages }: { pages: LinkProps[] }) => {
    return (
        <StyledHeader>
            <div className="header-desktop">
                <HeaderLogo />
                {pages
                    .map(l => <Link to={l.to} text={l.text} type={l.type} variant={l.variant}></Link>)}
            </div>

            <HamburgerMenu />
        </StyledHeader>
    );
};
