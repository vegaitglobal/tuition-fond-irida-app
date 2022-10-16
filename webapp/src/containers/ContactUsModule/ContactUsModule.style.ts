import styled from "styled-components";

export const StyledContactUsModule = styled.div`
    position: relative;
    padding: 90px 0 30px 178px;

    display: flex;
    flex-direction: row;
    width: 100%;

    .first-section {
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }

    .second-section {
        justify-content: center;
        width: 50%;
        max-height: 800px;
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
        margin-bottom: 40px;
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
        margin-top: 30px;
        justify-content: center;
    }
`;
