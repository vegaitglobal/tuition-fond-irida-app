import styled from "styled-components";

export const StyledCenteredTextModule = styled.div`
    padding: 60px 0 90px;
    text-align: center;
    color: ${(props) => props.theme.colors.white.main};

    &.primary {
        background-color: ${(props) => props.theme.colors.primary.main};
    }
    &.secondary {
        background-color: ${(props) => props.theme.colors.white.main};
        color: ${(props) => props.theme.colors.primary.main};
    }
    &.accent {
        background-color: ${(props) => props.theme.colors.accent.main};
    }

    & .text-module-wrap {
        max-width: 940px;
        padding: 0 20px;
        margin: 0 auto;
    }

    & h2 {
        font-size: 48px;
        line-height: 110%;
        font-weight: 600;
        margin-bottom: 30px;
    }

    & p {
        margin-bottom: 60px;
    }

    @media ${(props) => props.theme.breakpoints.laptop} {
        & h2 {
            font-size: 40px;
            line-height: 44px;
        }
    }
`;
