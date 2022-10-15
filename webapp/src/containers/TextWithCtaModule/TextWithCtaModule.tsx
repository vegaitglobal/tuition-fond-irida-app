import { Link } from "components";
import { StyledTextModule } from "./TextWithCtaModule.style";

interface Props {
    title: string;
    description: string;
    button: {
        text: string;
        url: string;
    };
}
export const TextWithCtaModule = (props: Props) => {
    const { title, description, button, ...rest } = props;

    return (
        <StyledTextModule {...rest}>
            <div className="text-module-wrap">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={button.url} text={button.text} variant="accent" type="button"></Link>
            </div>
        </StyledTextModule>
    );
};
