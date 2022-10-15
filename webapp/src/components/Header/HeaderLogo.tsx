import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export const HeaderLogo = () => {
    return (
        <Link to="/">
            <img height={55} src={logo} alt="Fondacija Putevima devojčica" />
        </Link>
    );
};
