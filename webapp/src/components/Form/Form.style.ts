import styled from "styled-components";

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;

    & .container.dark {
        background-color: ${(props) => props.theme.colors.white.main};
    }

    & .container.light {
        background-color: ${(props) => props.theme.colors.primary.main};
    }

    & .horizontal-container {
        display: flex;
        flex-direction: row;
    }

    & select {
        margin: 10px;
        padding: 10px;
        border-radius: 0.7rem;
        color: ${(props) => props.theme.colors.primary.main};
        font-weight: 700;

        option {
            color: ${(props) => props.theme.colors.primary.main};
            font-weight: 700;
        }
    }
`;
