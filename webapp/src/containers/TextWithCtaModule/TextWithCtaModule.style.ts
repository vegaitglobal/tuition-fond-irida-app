import styled from "styled-components";

export const StyledTextModule = styled.div`
    background-color: ${(props) => props.theme.colors.primary.main};
    padding: 60px 0 90px;
    text-align: center;
    outline: 1px solid;

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
        color: ${(props) => props.theme.colors.white.main};
    }

    & p {
        margin-bottom: 60px;
        color: ${(props) => props.theme.colors.white.main};
    }

    @media ${(props) => props.theme.breakpoints.laptop} {
        & h2 {
            font-size: 40px;
            line-height: 44px;
        }
    }
`;
