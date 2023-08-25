import { HashLink } from "react-router-hash-link";
import { StyledFooterContactSection } from "./Footer.style";
import { ReactComponent as LinkedinIcon } from "assets/images/linkedin.svg";
import { ReactComponent as FacebookIcon } from "assets/images/facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/images/instagram.svg";
import { IconButton } from "../IconButton/IconButton";
import {ContactInfoEntry, ContactInfoType, SocialMediaIconType} from "../../core/services/contentful/queries/getLayout";

const iconMappings = new Map<SocialMediaIconType, JSX.Element>();
iconMappings.set("Facebook", <FacebookIcon/>);
iconMappings.set("Instagram", <InstagramIcon/>);
iconMappings.set("LinkedIn", <LinkedinIcon/>);

const hrefFormatters = new Map<ContactInfoType, (data: string) => string>();
hrefFormatters.set("Phone number", (data) => "tel:" + data);
hrefFormatters.set("Email", (data) => "mailto:" + data);
hrefFormatters.set("Url", (data) => data);

export const FooterContactSection = ({ contactInfo } : { contactInfo: ContactInfoEntry[]}) => {
    return (
        <StyledFooterContactSection>
            <HashLink className="contact-us" to="/kontakt#contact-us-form">
                Kontaktiraj nas
            </HashLink>
            <div className="footer-contact-section-socials">
                { contactInfo.filter(c => c.socialMediaIcon != null)
                    .map(link => <IconButton icon={iconMappings.get(link.socialMediaIcon!)} url={link.data} />)}
            </div>

            <div className="footer-contact-section-info">
                { contactInfo.filter(c => c.socialMediaIcon === null)
                    .map(link => <a href={hrefFormatters.get(link.type)!(link.data)}>{link.label}</a>)}
            </div>
        </StyledFooterContactSection>
    );
};
