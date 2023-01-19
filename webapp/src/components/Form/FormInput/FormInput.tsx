import { ChangeEventHandler } from "react";
import { StyledFormInput } from "./FormInput.style";

interface Props {
    darkMode: boolean;
    text: string;
    textArea: boolean;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string;
    validationError?: string;
}
export const FormInput = (props: Props) => {
    const { darkMode, text, textArea, onChange, value, validationError } = props;

    return (
        <StyledFormInput>
            <div className="form-label-container">
                <label className={`form-label ${darkMode ? "dark" : "light"}`}>{text}</label>
                {validationError && <span className={`${darkMode ? "dark" : "light"}`}>* {validationError}</span>}
            </div>
            {textArea ? (
                <textarea
                    className={`form-input ${darkMode ? "dark" : "light"}`}
                    placeholder={text}
                    onChange={onChange}
                    key={text}
                    name={text}
                    value={value}
                ></textarea>
            ) : (
                <input
                    className={`form-input ${darkMode ? "dark" : "light"}`}
                    placeholder={text}
                    onChange={onChange}
                    key={text}
                    name={text}
                    value={value}
                ></input>
            )}
        </StyledFormInput>
    );
};

FormInput.defaultProps = {
    darkMode: false,
    text: "",
    textArea: false,
    value: "",
};
