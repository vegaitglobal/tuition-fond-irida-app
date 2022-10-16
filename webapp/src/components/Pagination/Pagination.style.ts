import styled from "styled-components";

export const StyledPagination = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: right;
    margin-right: 25px;

    & button {
        width: 62px;
        height: 62px;
        border-radius: 50px;
        color: ${(props) => props.theme.colors.primary.main};
        background-color: white;
        border: 3px solid ${(props) => props.theme.colors.primary.main};
        margin: 20px;

        &.active {
            background-color: ${(props) => props.theme.colors.primary.main};
            color: white;
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.accent.main};
            color: white;
            cursor: pointer;
        }
    }
`;
