import styled from "styled-components";

export const StyledLink = styled.div`
    display: flex;
    justify-content: center;

    & .button-link {
        background-color: ${(props) => props.theme.colors.white.main};
        width: 205px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 24px;
        border-radius: 0.7rem;
        transition: 200ms ease;
        transition-property: background-color;
        cursor: pointer;

        & a {
            color: ${(props) => props.theme.colors.primary.main};
            text-decoration: none;
            font-weight: 700;
            font-size: 20px;
            transition: 200ms ease;
            transition-property: color;
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.accent.main};
        }
        &:hover a {
            color: ${(props) => props.theme.colors.white.main};
        }
    }
    & .button-link.accent {
        background-color: ${(props) => props.theme.colors.accent.main};

        & a {
            color: ${(props) => props.theme.colors.white.main};
        }
    }
    & .button-link.outline {
        background-color: transparent;
        border: 3px solid ${(props) => props.theme.colors.white.main};

        & a {
            color: ${(props) => props.theme.colors.white.main};
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.white.main};
        }
        &:hover a {
            color: ${(props) => props.theme.colors.primary.main};
        }
    }

    & .link {
        & a {
            color: ${(props) => props.theme.colors.white.main};
            text-decoration: none;
            font-weight: 700;
            font-size: 20px;
        }
    }
`;
