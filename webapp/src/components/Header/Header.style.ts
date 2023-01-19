import styled from "styled-components";

export const StyledHeader = styled.nav`
    height: 85px;
    background-color: ${(props) => props.theme.colors.primary.main};
    position: relative;

    & .header-desktop {
      height: 100%;
        padding: 14px 178px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & a {
            font-size: 16px;
        }

        @media ${(props) => props.theme.breakpoints.laptop} {
            display: none;
        }

        @media ${(props) => props.theme.breakpoints.laptopL} {
            padding: 14px 130px;
        }
    }
`;
