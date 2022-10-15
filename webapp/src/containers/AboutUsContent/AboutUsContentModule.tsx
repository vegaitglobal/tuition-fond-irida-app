import { StyledAboutUsContentModule } from "./AboutUsContentModule.style";

interface Props {
    title1: string;
    description1: string;
    title2: string;
    description2: string;
    image: string;
    imageLeft: boolean;
}

/**
 * @deprecated
 */
//
export const AboutUsContentModule = (props: Props) => {
    const { title1, description1, image, imageLeft, title2, description2 } = props;

    return (
        <StyledAboutUsContentModule>
            <div className="first-section">
                {imageLeft ? (
                    <>
                        <img src={image} alt={title1} />
                        <div className="content">
                            <h1>{title1}</h1>
                            <p>{description1}</p>
                            <h1>{title2}</h1>
                            <p>{description2}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="content">
                            <h1>{title1}</h1>
                            <p>{description1}</p>
                            <h1>{title2}</h1>
                            <p>{description2}</p>
                        </div>
                        <img src={image} alt={title1} />
                    </>
                )}
            </div>
        </StyledAboutUsContentModule>
    );
};
