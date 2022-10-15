import { Link } from "components";
import { StyledTextModule } from "./TextWithCtaModule.style";

interface Props {
    title: string;
    description: string;
    button: {
        text: string;
        url: string;
    };
    darkMode: boolean;
}

export const TextWithCtaModule = (props: Props) => {
    const { title, description, button, darkMode, ...rest } = props;

    return (
        <StyledTextModule {...rest}>
            <div className={darkMode ? "text-module-wrap dark" : "text-module-wrap light"}>
                <h2 className={darkMode ? "dark" : "light"}>{title}</h2>
                <p className={darkMode ? "dark" : "light"}>{description}</p>
                <Link to={button.url} text={button.text} variant="accent" type="button"></Link>
            </div>
        </StyledTextModule>
    );
};

TextWithCtaModule.defaultProps = {
    darkMode: true
}