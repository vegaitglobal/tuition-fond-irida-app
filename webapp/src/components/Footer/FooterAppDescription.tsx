import { StyledFooterAppDescription } from "./Footer.style";
import logoIllustration from "assets/images/logo_illustration.png";
import appStore from "assets/images/app_store.png";
import googlePlay from "assets/images/google_play.png";
import {AppDescriptionEntry} from "../../core/services/contentful/queries/getLayout";

export const FooterAppDescription = ({ appDescription } : { appDescription: AppDescriptionEntry | undefined }) => {
    if (!appDescription || !appDescription.isShown) return <></>;

    return (
        <StyledFooterAppDescription>
            <div className="footer-app-description-upper">
                <div>
                    <h2>{appDescription.title}</h2>
                    <p>
                        {appDescription.subtitle}
                    </p>
                </div>
                <img src={logoIllustration} alt="Fondacija Putevima devojčica" />
            </div>

            <p>
                {appDescription.downloadAppText}
            </p>

            <div className="footer-download-section">
                <button className="download-mobile-app-button">
                    <a
                        href={appDescription.appStoreLink}
                        target="_blank"
                        rel="external"
                    >
                        <img src={appStore} alt="App Store" />
                    </a>
                </button>
                <button className="download-mobile-app-button">
                    <a
                        href={appDescription.googlePlayStoreLink}
                        target="_blank"
                        rel="external"
                    >
                        <img src={googlePlay} alt="Google Play" />
                    </a>
                </button>
            </div>
        </StyledFooterAppDescription>
    );
};
