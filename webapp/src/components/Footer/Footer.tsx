import { StyledFooter } from "./Footer.style";
import { FooterAppDescription } from "./FooterAppDescription";
import { FooterContactSection } from "./FooterContactSection";
import { Link } from "react-router-dom";
import { PageReferenceEntry } from "../../core/services/contentful/queries/getPageReferences";
import {AppDescriptionEntry, ContactInfoEntry} from "../../core/services/contentful/queries/getLayout";

export const Footer = ({ pages, appDescription, contactInformation }: { pages: PageReferenceEntry[], appDescription: AppDescriptionEntry | undefined, contactInformation: ContactInfoEntry[] }) => {
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
            <FooterAppDescription appDescription={appDescription}/>
            <FooterContactSection contactInfo={contactInformation} />
        </StyledFooter>
    );
};

interface FooterLink {
    to: string;
    text: string;
}
