import styled from "styled-components";

export const StyledBlogDetailsPage = styled.div<{
    backgroundImage: string;
}>`
    text-align: center;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;

    & .banner {
        background-image: url(${(props) => props.backgroundImage});
        height: 45vh;
        background-position: center;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;

        & .author {
            margin-top: 100px;
            width: 490px;
            height: 210px;
            background: ${(props) => props.theme.colors.white.main};
            border-radius: 20px;

            & .blog-author-item-title {
                padding-top: 30px;
                font-family: "Montserrat", sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 48px;
                line-height: 110%;
                letter-spacing: -0.09em;
                color: ${(props) => props.theme.colors.primary.main};
            }

            & .blog-author-wrapper {
                display: flex;
                gap: 30px;
                height: 70px;
                justify-content: center;
                align-items: center;
                margin-top: 30px;

                & .blog-author-profile-picture {
                    background-color: ${(props) => props.theme.colors.primary.main};
                    width: 66px;
                    height: 66px;
                    border-radius: 50%;
                    padding: 3px;

                    img {
                        display: block;
                        filter: grayscale(100%);
                        width: 100%;
                        border-radius: 50%;
                    }
                }

                & .blog-author-name {
                    font-family: "Montserrat", sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 110%;
                    letter-spacing: -0.05em;
                    color: ${(props) => props.theme.colors.primary.main};
                    white-space: nowrap;
                }
            }

            @media ${(props) => props.theme.breakpoints.mobileL} {
                width: 100%;
                margin: 60px 10px 0;

                & .blog-author-wrapper {
                    flex-direction: column;
                    gap: 10px;
                }
            }
        }
    }

    & .content {
        padding: 0 150px;

        @media ${(props) => props.theme.breakpoints.tablet} {
            padding: 0 75px;
        }

        @media ${(props) => props.theme.breakpoints.mobileL} {
            padding: 0 35px;
        }
    }

    & .blog-item-title {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 48px;
        line-height: 53px;
        margin-top: 50px;
        margin-bottom: 60px;
        font-style: normal;
        color: ${(props) => props.theme.colors.primary.main};

        @media ${(props) => props.theme.breakpoints.tablet} {
            font-size: 36px;
            margin-bottom: 40px;
        }
    }

    & .blog-item-description {
        font-family: Montserrat, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.05em;
        text-align: left;
        color: ${(props) => props.theme.colors.primary.main};

        img {
            margin: 60px 0;
            width: 100%;
            max-height: 400px;
            object-fit: cover;
        }

        p {
            margin-bottom: 10px;
        }

        h2 {
            margin-top: 60px;
            margin-bottom: 30px;
            font-family: "Montserrat", sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 110%;
            letter-spacing: -0.09em;
        }

        @media ${(props) => props.theme.breakpoints.tablet} {
            line-height: 18px;
            img {
                margin: 30px 0;
            }
        }
    }
`;
