import styled from "styled-components";

export const StyledBlogsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1604px;
    margin: 0 auto;

    & .blog-cards-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
        margin-top: 60px;
    }
`;
