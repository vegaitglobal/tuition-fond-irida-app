import styled from "styled-components";

export const StyledFormInput = styled.div`
    display: flex;
    flex-direction: column;
    //padding: 10px;
    width: 100%;
    margin-bottom: 20px;

    & .form-label {
        font-weight: 600;
        margin-left: 5px;
        margin-bottom: 5px;
        margin-top: 10x;
        border: none;
        font-size: 16px;
    }

    & .form-label.dark {
        color: ${(props) => props.theme.colors.primary.main};
    }

    & .form-label.light {
        color: ${(props) => props.theme.colors.white.main};
    }

    & .form-input {
        font-family: Lato, sans-serif;

        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 110%;
        color: black;
        padding: 15px;
        &::placeholder {
            font-family: Montserrat, sans-serif;
        }
    }

    & textarea {
        font-family: Montserrat, sans-serif;
    }
`;
