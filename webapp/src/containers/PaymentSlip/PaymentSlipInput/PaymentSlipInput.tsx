import { StyledFormInput } from "./PaymentSlipInput.style";

interface Props {
    darkMode: boolean;
    text: string;
    inputValue: string;
    textArea: boolean;
}
export const PaymentSlipInput = (props: Props) => {
    const { darkMode, text, textArea, inputValue } = props;

    return (
        <StyledFormInput>
            <label className={`form-label ${darkMode ? "dark" : "light"}`}>{text}</label>
            {textArea ? (
                <textarea
                    readOnly={true}
                    className={`form-input ${darkMode ? "dark" : "light"}`}
                    placeholder={text}
                    key={text}
                    name={text}
                ></textarea>
            ) : (
                <input
                    readOnly={true}
                    className={`form-input`}
                    key={text}
                    name={text}
                    value={inputValue}
                ></input>
            )}
        </StyledFormInput>
    );
};

PaymentSlipInput.defaultProps = {
    darkMode: false,
    text: "",
    textArea: false,
};
