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

        & .author {
            position: relative;
            top: 160px;
            width: 492px;
            height: 209px;
            background: ${(props) => props.theme.colors.white.main};
            margin: 0 auto;
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

            & .blog-author-profile-picture {
                background-color: ${(props) => props.theme.colors.primary.main};
                width: 66px;
                height: 66px;
                border-radius: 50%;
                padding: 3px;
                margin-left: 150px;
                margin-top: 30px;

                img {
                    display: block;
                    filter: grayscale(100%);
                    width: 100%;
                    border-radius: 50%;
                }
            }

            & .blog-author-name {
                font-family: "Lato", sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 110%;
                letter-spacing: -0.05em;
                color: ${(props) => props.theme.colors.primary.main};
                position: relative;
                top: -40px;
                left: 60px;
                white-space: nowrap;
            }
        }
    }

    & .content {
        padding: 0 150px;
    }

    & .blog-item-title {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 48px;
        line-height: 53px;
        margin-top: 50px;
        font-style: normal;
        color: ${(props) => props.theme.colors.primary.main};
        margin-bottom: 60px;
    }

    & .blog-item-description {
        font-family: Lato, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.05em;
        text-align: left;

        color: ${(props) => props.theme.colors.primary.main};

        img {
            margin-bottom: 60px;
            margin-top: 60px;
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
    }
`;
