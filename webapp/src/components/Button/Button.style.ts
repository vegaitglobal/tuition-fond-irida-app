import styled from "styled-components";

const BaseButton = styled.button`
    padding: 17px 45px;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    font-style: normal;
    font-size: 24px;
    font-weight: 700;
    transition: 200ms ease;
    transition-property: background-color, color;
    font-family: "Montserrat", sans-serif;

    @media ${(props) => props.theme.breakpoints.tablet} {
        padding: 14px 45px;
    }
`;

export const LightButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.colors.white.main};
    color: ${(props) => props.theme.colors.primary.main};

    &:hover {
        background-color: ${(props) => props.theme.colors.accent.main};
        color: ${(props) => props.theme.colors.white.main};
    }
`;

export const AccentButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.colors.accent.main};
    color: ${(props) => props.theme.colors.white.main};

    &:hover {
        background-color: ${(props) => props.theme.colors.accent.light};
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.white.main};

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.light};
    }
`;

export const DefaultButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.colors.white.main};
    color: ${(props) => props.theme.colors.primary.main};

    &:hover {
        background-color: ${(props) => props.theme.colors.white.dark};
    }
`;

export const OutlinedButton = styled(BaseButton)`
    background-color: transparent;
    color: ${(props) => props.theme.colors.white.main};
    border: 3px solid ${(props) => props.theme.colors.white.main};

    &:hover {
        background-color: ${(props) => props.theme.colors.white.dark};
    }
`;
