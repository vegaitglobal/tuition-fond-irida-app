import { StyledFooterSection } from "./Footer.style";
import { Link } from "react-router-dom";

interface FooterLink {
    to: string;
    text: string;
}
export interface FooterSectionProps {
    title: string;
    links: FooterLink[];
}
export const FooterSection = (props: FooterSectionProps) => {
    const { title, links } = props;

    const linkElements = links.map((link, i) => (
        <Link key={`footer-link-${i}`} to={link.to}>
            {link.text}
        </Link>
    ));

    return (
        <StyledFooterSection key={title}>
            <h2>{title}</h2>
            <div className="footer-links">{linkElements}</div>
        </StyledFooterSection>
    );
};
