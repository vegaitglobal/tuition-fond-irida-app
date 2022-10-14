import styled from "styled-components";

export const StyledHeader = styled.nav`
    background-color: ${(props) => props.theme.colors.primary.main};
    padding: 14px 178px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
