import { StyledFooterAppDescription } from "./Footer.style";
import logoIllustration from "assets/images/logo_illustration.png";
import appStore from "assets/images/app_store.png";
import googlePlay from "assets/images/google_play.png";

export const FooterAppDescription = () => {
    return (
        <StyledFooterAppDescription>
            <div className="footer-app-description-upper">
                <div>
                    <h2>Aplikacija Putevima Žena</h2>
                    <p>
                        Prošetaj ženskom stranom istorije, obiđi mesta na kojima su živele i
                        stvarale znamenite žene i pronađi svoju inspiraciju među njima.
                    </p>
                </div>
                <img src={logoIllustration} alt="Fondacija Putevima devojčica" />
            </div>

            <p>
                Preuzmi aplikaciju “Putevima žena” i upoznaj se sa pričama o odvažnosti, snazi,
                upornosti.
            </p>

            <div className="footer-download-section">
                <button className="download-mobile-app-button">
                    {/*TODO: get the real app store link*/}
                    <a href="https://google.com" target="_blank" rel="external">
                        <img src={appStore} alt="App Store" />
                    </a>
                </button>
                <button className="download-mobile-app-button">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.putevimazena"
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
