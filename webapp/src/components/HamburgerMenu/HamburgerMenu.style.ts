import styled from "styled-components";

export const StyledHamburgerMenu = styled.div`
    display: none;

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
        position: absolute;
        right: 25px;
        top: 26px;
    }
    & button:hover {
        opacity: 0.6;
    }

    & .hamburger-menu-content {
        position: absolute;
        top: 0;
        right: 0;
        background-color: ${(props) => props.theme.colors.white.main};
        height: 100vh;
        z-index: 100;
    }
    & .hamburger-menu-content.opened {
        width: 100vw;
        transition: 200ms ease;
        transition-property: width;
    }
    & .hamburger-menu-content.closed {
        width: 0;
    }

    @media ${(props) => props.theme.breakpoints.laptop} {
        display: flex;
    }
`;
