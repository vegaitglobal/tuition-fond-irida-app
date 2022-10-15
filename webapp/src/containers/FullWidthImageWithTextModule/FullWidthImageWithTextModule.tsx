import { StyledFullWidthImageWithTextModule } from "./FullWidthImageWithTextModule.style";
import { Link } from "../../components";

interface Props {
    title: string;
    description: string;
    image: string;
    buttons: {
        text: string;
        url: string;
    }[];
}

export const FullWidthImageWithTextModule = (props: Props) => {
    const { title, description, image, buttons, ...rest } = props;

    return (
        <StyledFullWidthImageWithTextModule {...rest}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="button-wrap">
                <Link type="button" variant="primary" to={buttons[0].url} text={buttons[0].text} />
                <Link type="button" variant="outline" to={buttons[0].url} text={buttons[0].text} />
            </div>
        </StyledFullWidthImageWithTextModule>
    );
};
