import { StyledAboutUsContentModule } from "./AboutUsContentModule.style";

interface Props {
    title1: string;
    description1: string;
    image1: string;
    image1Left: boolean;
    title2: string;
    description2: string;
    image2: string;
    image2Left: boolean;
}

export const AboutUsContentModule = (props: Props) => {
    const { title1, description1, image1, image1Left, title2, description2, image2, image2Left } = props;

    return (
        <StyledAboutUsContentModule>
            {image1Left ? (
                <>
                <img src={image1} alt={title1} />
                <h1>{title1}</h1>
                <p>{description1}</p>
                </>
            ) : (
                <>
                <h1>{title1}</h1>
                <p>{description1}</p>
                <img src={image1} alt={title1} />
                </>
            )}
            {image2Left ? (
                <>
                <img src={image2} alt={title2} />
                <h1>{title2}</h1>
                <p>{description2}</p>
                </>
            ) : (
                <>
                <h1>{title2}</h1>
                <p>{description2}</p>
                <img src={image2} alt={title2} />
                </>
            )}
        </StyledAboutUsContentModule>
    )
}