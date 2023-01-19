import { StyledFooter } from "./Footer.style";
import { FooterAppDescription } from "./FooterAppDescription";
import { FooterContactSection } from "./FooterContactSection";
import { Link } from "react-router-dom";
import { PageReferenceEntry } from "../../core/services/contentful/queries/getPageReferences";

export const Footer = ({ pages }: { pages: PageReferenceEntry[] }) => {
    const footerLinksData: FooterLink[] = pages.map((page) => ({
        text: page.title,
        to: page.path,
    }));

    const footerLinks = footerLinksData
        .filter((link) => !link.to.includes(":"))
        .map((link, i) => (
            <Link key={`footer-link-${i}`} to={link.to}>
                {link.text}
            </Link>
        ));
    return (
        <StyledFooter>
            <div className="footer-section-list">{footerLinks}</div>
            <FooterAppDescription />
            <FooterContactSection />
        </StyledFooter>
    );
};

interface FooterLink {
    to: string;
    text: string;
}
