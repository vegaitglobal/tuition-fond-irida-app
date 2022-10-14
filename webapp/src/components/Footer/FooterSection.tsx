import { StyledFooterSection } from "./Footer.style";
import { Link } from "react-router-dom";

interface FooterLink {
    to: string;
    text: string;
}
interface Props {
    title: string;
    links: FooterLink[];
}
export const FooterSection = (props: Props) => {
    const { title, links } = props;

    const linkElements = links.map((link) => <Link to={link.to}>{link.text}</Link>);

    return (
        <StyledFooterSection>
            <h2>{title}</h2>
            <div className="footer-links">{linkElements}</div>
        </StyledFooterSection>
    );
};
