import styled from "styled-components";
import { breakpoints } from "../../style/breakpoints";

const BaseButton = styled.button`
    padding: 17px 100px;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    font-style: normal;
    font-size: 24px;
    font-weight: 700;
    transition: background-color 200ms ease;
    font-family: "Montserrat";

    @media ${breakpoints.mobileL} {
        padding: 14px 43px;
    }
`;

export const AccentButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.colors.accent.main};
    color: ${(props) => props.theme.colors.foreground.main};

    &:hover {
        background-color: ${(props) => props.theme.colors.accent.light};
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.foreground.main};

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
