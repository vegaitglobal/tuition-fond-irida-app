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

    & .button-container {
        border-radius: 20px;
        text-align: center;

        & button {
            width: 205px;
            padding: 14px 24px;
            border-radius: 0.7rem;
            font-weight: 700;
            font-size: 16px;
        }
    }
`;

export const StyledModalContent = styled.div`
    background-color: ${(props) => props.theme.colors.primary.main};
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .modal-content-title {
        font-size: 24px;
        font-weight: 700;
        font-family: Montserrat, sans-serif;
        line-height: 30px;
    }

    & .modal-content-description {
        font-size: 16px;
        font-weight: 400;
        line-height: 18px;
        font-family: Lato, sans-serif;
        margin-top: 15px;
    }

    & Button {
        margin-top: 23px;
        align-self: center;
    }
`;
