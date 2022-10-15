import { StyledFooterAppDescription } from "./Footer.style";
import logoIllustration from "assets/images/logo_illustration.png";

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
                <button>Download on the App Store</button>
                <button>Get it on Google Play</button>
            </div>
        </StyledFooterAppDescription>
    );
};
