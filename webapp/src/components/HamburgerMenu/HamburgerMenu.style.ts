import styled from "styled-components";

export const StyledHamburgerMenu = styled.div`
    display: none;
    position: absolute;
    right: 25px;
    top: 26px;

    & button {
        border: none;
        outline: transparent;
        background-color: transparent;
        font-weight: 700;
        color: ${(props) => props.theme.colors.white.main};
        padding: 0;
        cursor: pointer;
        opacity: 1;
        height: 32px;
        width: 32px;
    }
    & button:hover {
        opacity: 0.6;
    }

    @media ${(props) => props.theme.breakpoints.laptop} {
        display: flex;
    }
`;
