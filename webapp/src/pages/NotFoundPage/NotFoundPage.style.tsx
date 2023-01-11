import styled from "styled-components";

export const StyledNotFoundPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;

    & h1 {
        text-align: center;
        font-size: 48px;
        color: ${(props) => props.theme.colors.black.main};
    }

    & p {
        font-size: 24px;
    }
`;
