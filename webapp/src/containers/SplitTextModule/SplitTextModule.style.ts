import styled from "styled-components";

export const StyledSplitTextModule = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;

    & .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        margin: 60px 10%;
        width: 100%;
        @media ${(props) => props.theme.breakpoints.tablet} {
            width: 100%;
            margin: 0;
            padding: 60px 10px;
            align-items: center;
        }
    }

    & .secondary {
        color: ${(props) => props.theme.colors.primary.main};
        background-color: ${(props) => props.theme.colors.white.main};
        display: flex;
        flex-direction: row;
        width: 100%;

        @media ${(props) => props.theme.breakpoints.tablet} {
            flex-direction: column;
        }
    }

    & .primary {
        color: ${(props) => props.theme.colors.white.main};
        background-color: ${(props) => props.theme.colors.primary.main};
        display: flex;
        flex-direction: row;

        @media ${(props) => props.theme.breakpoints.tablet} {
            flex-direction: column;
        }
    }

    & img {
        max-width: 50%;
        object-fit: cover;
        @media ${(props) => props.theme.breakpoints.tablet} {
            max-width: 100%;
        }
    }

    & h1 {
        font-weight: 600;
        font-size: 48px;
        margin-bottom: 20px;
        line-height: 110%;
    }

    & p {
        font-weight: 400;
        font-size: 16px;
        max-width: 80%;
        margin-bottom: 10px;
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
        margin-bottom: 90px;
    }
`;
