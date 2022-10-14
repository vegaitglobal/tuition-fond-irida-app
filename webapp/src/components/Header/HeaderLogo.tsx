import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export const HeaderLogo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="Fondacija Putevima devojčica" />
        </Link>
    );
};
