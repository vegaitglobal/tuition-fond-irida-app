import styled from "styled-components";

export const StyledBlogsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1604px;
    margin: 0 auto;

    & .blog-cards-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 100px;
        margin-top: 60px;
    }
`;
