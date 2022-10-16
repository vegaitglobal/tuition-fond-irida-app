import { ChangeEventHandler } from "react";
import { StyledFormInput } from "./PaymentSlipInput.style";

interface Props {
    darkMode: boolean;
    text: string;
    inputValue: string;
    textArea: boolean;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
export const PaymentSlipInput = (props: Props) => {
    const { darkMode, text, textArea, inputValue, onChange } = props;
    
    return (
        <StyledFormInput>
            <label className={`form-label ${darkMode ? "dark" : "light"}`}>{text}</label>
            {textArea ? (
                <textarea
                    className={`form-input ${darkMode ? "dark" : "light"}`}
                    placeholder={text}
                    onChange={onChange}
                    key={text}
                    name={text}
                ></textarea>
            ) : (
                <input
                    className={`form-input`}
                    onChange={onChange}
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