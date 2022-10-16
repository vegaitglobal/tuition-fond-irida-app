import styled from "styled-components";

export const StyledBlogCard = styled.div`
    background-color: ${(props) => props.theme.colors.primary.main};
    color: white;
    border-radius: 50px;
    width: 455px;
    height: 519px;
    margin: 50px;
    padding: 20px;

    & div.blog-card-image-wrapper {
        height: 238px;
        overflow: hidden;
        margin-bottom: 20px;

        & img {
            width: 100%;
            height: 100%;
            border-radius: 50px;
            object-fit: cover;
        }
    }

    & .blog-card-title {
        font-size: 24px;
        font-weight: 700;
        font-family: Montserrat, sans-serif;
        line-height: 30px;
    }

    & .blog-card-description {
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        font-family: Lato, sans-serif;
        margin-top: 15px;
    }
`;
