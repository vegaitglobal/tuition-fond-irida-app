import styled from "styled-components";

export const StyledSplitTextModule = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;

    & .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 180px;
        margin-right: 180px;
        margin-top: 60px;
        width: 50%;
    }

    & .secondary {
        color: ${(props) => props.theme.colors.primary.main};
        background-color: ${(props) => props.theme.colors.white.main};
        display: flex;
        flex-direction: row;
    }

    & .primary {
        color: ${(props) => props.theme.colors.white.main};
        background-color: ${(props) => props.theme.colors.primary.main};
        display: flex;
        flex-direction: row;
    }

    & img {
        max-width: 50%;
    }

    & h1 {
        font-weight: 600;
        font-size: 48px;
        margin-bottom: 60px;
        line-height: 110%;
    }

    & p {
        font-weight: 400;
        font-size: 16px;
        max-width: 80%;
        margin-bottom: 90px;
        line-height: 17.6px;
    }

    & span {
        font-weight: 400;
        font-size: 16px;
        max-width: 80%;
        margin-bottom: 90px;
        line-height: 17.6px;
    }

    & .button-link {
        margin-bottom: 90px
    }
`;
