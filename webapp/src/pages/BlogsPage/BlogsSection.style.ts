import styled from "styled-components";
import bannerBackground from "../../assets/images/blogs_banner.png";

export const StyledBlogsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;

    & .blogs-banner {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 435px;
        padding: 0 10px;
        background: url(${bannerBackground});
        background-size: cover;
        background-repeat: no-repeat;
        object-fit: cover;

        & h1 {
            color: ${(props) => props.theme.colors.primary.main};
            font-family: Montserrat, sans-serif;
            font-weight: 600;
            font-size: 48px;
            line-height: 110%;
            letter-spacing: -0.09em;
        }

        & p {
            color: ${(props) => props.theme.colors.primary.main};
            font-family: Montserrat, sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 110%;
        }

        & .category-wrapper {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
            justify-content: center;
            width: 336px;
            padding-top: 30px;

            & h3 {
                color: ${(props) => props.theme.colors.primary.main};
                font-family: Montserrat, sans-serif;
                font-weight: 400;
                font-size: 24px;
                line-height: 110%;
            }

            & select {
                width: 100%;
                height: 64px;
                border: 3px solid ${(props) => props.theme.colors.primary.main};
                border-radius: 20px;
                text-align: center;
                color: ${(props) => props.theme.colors.primary.main};
                font-weight: 700;
                font-size: 16px;
            }
        }
    }

    & .blog-cards-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        gap: 50px;
        margin-top: 60px;
    }
`;
