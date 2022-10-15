import { StyledFooter } from "./Footer.style";
import { FooterSection, FooterSectionProps } from "./FooterSection";
import { FooterAppDescription } from "./FooterAppDescription";
import { FooterContactSection } from "./FooterContactSection";

export const Footer = () => {
    const footerSectionElements = footerSections.map((section) => (
        <FooterSection key={section.title} links={section.links} title={section.title} />
    ));
    return (
        <StyledFooter>
            <div className="footer-section-list">{footerSectionElements}</div>
            <FooterAppDescription />
            <FooterContactSection />
        </StyledFooter>
    );
};

const footerSections: FooterSectionProps[] = [
    {
        title: "Šop",
        links: [
            { text: "Nothing", to: "/" },
            { text: "Nothing", to: "/" },
            { text: "Nothing", to: "/" },
            { text: "Nothing", to: "/" },
        ],
    },
    {
        title: "O nama",
        links: [
            { text: "Nothing", to: "/" },
            { text: "Nothing", to: "/" },
            { text: "Nothing", to: "/" },
        ],
    },
    {
        title: "Blog",
        links: [
            { text: "Nothing", to: "/" },
            { text: "Nothing", to: "/" },
            { text: "Nothing", to: "/" },
            { text: "Nothing", to: "/" },
            { text: "Nothing", to: "/" },
        ],
    },
    {
        title: "Devojčice",
        links: [{ text: "Nothing", to: "/" }],
    },
];
