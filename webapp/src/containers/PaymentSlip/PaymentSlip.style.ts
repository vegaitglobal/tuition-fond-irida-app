import styled from "styled-components";

export const StyledPaymentSlip = styled.div`
    background-color: ${(props) => props.theme.colors.primary.main};
    display: flex;
    flex-direction: column;

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: ${(props) => props.theme.colors.primary.main};
        gap: 20px;
        margin-top: 21px;
    }

    .grid-item-row {
        display: flex;
        width: max;
        gap: 20px;
    }

    .smaller-input {
        width: 132px;
    }

    .form-input {
        border-radius: 0px !important;
        height: 83px;
        font-family: "Lato";
        font-size: 24px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
    }

    & Button {
        align-self: flex-end;
    }

    .btn-modal-close {
        background: white;
        border-radius: 26.5px;
        position: absolute;
        width: 55px;
        height: 54px;
        top: 22px;
        font-size: 36px;
        color: ${(props) => props.theme.colors.primary.main};
        border: none;
        bottom: calc(100% - 21px);
        transition: 200ms ease;
        transition-property: background-color, color;
        cursor: pointer;

        &:hover {
            color: white;
            background: #b8331d;
        }
    }
`;
