import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";

export const HeaderLogo = () => {
    return (
        <Link to="/">
            <img height={45} src={logo} alt="Fondacija Putevima devojčica" />
        </Link>
    );
};
