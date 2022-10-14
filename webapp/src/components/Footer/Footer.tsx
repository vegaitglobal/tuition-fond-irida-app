import { StyledFooter } from "./Footer.style";
import { FooterSection } from "./FooterSection";

export const Footer = () => {
    const footerSectionElements = footerSections.map((section) => (
        <FooterSection
            key={section.title}
            links={section.links}
            title={section.title}
        ></FooterSection>
    ));
    return <StyledFooter>{footerSectionElements}</StyledFooter>;
};

const footerSections = [
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
