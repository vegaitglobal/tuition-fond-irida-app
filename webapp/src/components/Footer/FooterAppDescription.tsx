import { StyledFooterAppDescription } from "./Footer.style";
import logoIllustration from "assets/images/logo_illustration.png";
import { ReactComponent as AppleIcon } from "assets/images/apple.svg";
import { ReactComponent as GooglePlayIcon } from "assets/images/google_play.svg";

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
                    <AppleIcon />
                    <div>
                        Download on the <span>App Store</span>
                    </div>
                </button>
                <button className="download-mobile-app-button">
                    <GooglePlayIcon />
                    <div>
                        GET IT ON <span>Google Play</span>
                    </div>
                </button>
            </div>
        </StyledFooterAppDescription>
    );
};
