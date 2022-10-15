import styled from "styled-components";

export const StyledHeader = styled.nav`
    height: 85px;
    background-color: ${(props) => props.theme.colors.primary.main};
    position: relative;

    & .header-desktop {
        padding: 14px 178px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media ${(props) => props.theme.breakpoints.laptop} {
            display: none;
        }

        @media ${(props) => props.theme.breakpoints.laptopL} {
            padding: 14px 130px;
        }
    }
`;

export const StyledHeaderLink = styled.span`
    & a {
        color: ${(props) => props.theme.colors.white.main};
        font-weight: 700;
        text-decoration: none;
        transition: color 200ms ease;
    }

    & a:hover {
        color: ${(props) => props.theme.colors.white.dark};
    }
`;
