import styled from "styled-components";

export const StyledAboutUsContentModule = styled.div`
    position: relative;
    padding: 90px 0 30px 178px;

    .first-section {
        display: flex;
        justify-content: center;
    }

    .second-section {
        display: flex;
        justify-content: center;
    }

    .content {
        min-width: 772px;
    }

    & img {
        margin-left: 100px;
        margin-right: 178px;
    }

    & h1 {
        color: ${(props) => props.theme.colors.primary.main};
        font-weight: 600;
        font-size: 48px;
        margin-bottom: 60px;
        line-height: 110%;
    }

    & p {
        color: ${(props) => props.theme.colors.primary.main};
        font-weight: 400;
        font-size: 16px;
        max-width: 80%;
        margin-bottom: 90px;
        line-height: 17.6px;
    }

    & .button-wrap {
        display: flex;
        gap: 20px;
    }
`;
