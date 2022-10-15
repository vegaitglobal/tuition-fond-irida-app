import styled from "styled-components";

export const StyledHamburgerMenu = styled.div`
    display: none;

    & button.hamburger-button,
    & button.hamburger-close-button {
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
    & button.hamburger-button:hover {
        opacity: 0.6;
    }

    & .hamburger-menu-content {
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${(props) => props.theme.colors.primary.transparent};
        border-bottom: 1px solid ${(props) => props.theme.colors.white.main};
        backdrop-filter: blur(5px);
        height: 440px;
        z-index: 100;
        width: 100%;
        transition: 200ms ease;
        transition-property: transform;

        & .hamburger-menu-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            padding-top: 85px;

            & .hamburger-menu-links-buttons {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;
                gap: 30px;

                & button {
                    width: 250px;
                    padding: 14px 22px;
                }
            }
        }
    }
    & .hamburger-menu-content.opened {
        transform: translateY(0);
    }
    & .hamburger-menu-content.closed {
        transform: translateY(-100%);
    }

    @media ${(props) => props.theme.breakpoints.laptop} {
        display: flex;
    }
`;
