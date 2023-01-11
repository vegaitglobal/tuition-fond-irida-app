import { StyledNotFoundPage } from "./NotFoundPage.style";
import { Link } from "../../components";
import logo from "../../assets/images/logo_illustration.png";

export const NotFoundPage = () => {
    return (
        <StyledNotFoundPage>
            <img src={logo} alt="Irida" />
            <h1>Došlo je do greške.</h1>
            <Link to="/" text="Nazad na početnu" type="button" variant="primary" />
        </StyledNotFoundPage>
    );
};
