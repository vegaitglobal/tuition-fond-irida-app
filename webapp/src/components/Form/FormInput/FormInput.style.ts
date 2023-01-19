import styled from "styled-components";

export const StyledFormInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    & .form-label {
        font-weight: 600;
        margin-left: 5px;
        margin-bottom: 5px;
        margin-top: 10x;
        border: none;
        font-size: 16px;
    }

    & .form-label-container {
        display: flex;

        & span {
            margin-bottom: 5px;
            line-height: 0;
            align-self: center;
            margin-left: 10px;
        }

        & span.dark {
            color: ${(props) => props.theme.colors.primary.main};
        }

        & span.light {
            color: ${(props) => props.theme.colors.white.main};
        }
    }

    & .form-label.dark {
        color: ${(props) => props.theme.colors.primary.main};
    }

    & .form-label.light {
        color: ${(props) => props.theme.colors.white.main};
    }

    & .form-input {
        font-weight: 500;
        padding: 10px;
        border-radius: 0.7rem;
        font-size: 16px;
    }

    & .form-input.dark {
        color: ${(props) => props.theme.colors.primary.light};
        background-color: ${(props) => props.theme.colors.primary.main};
    }

    & .form-input.light {
        color: ${(props) => props.theme.colors.primary.main};
        background-color: ${(props) => props.theme.colors.white.main};
    }

    & textarea {
        font-family: "Montserrat", sans-serif;
    }
`;
