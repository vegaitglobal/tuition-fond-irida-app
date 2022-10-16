import { ChangeEventHandler } from "react";
import { StyledFormInput } from "./FormInput.style";

interface Props {
    darkMode: boolean;
    text: string;
    textArea: boolean;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
export const FormInput = (props: Props) => {
    const { darkMode, text, textArea, onChange } = props;

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
                    className={`form-input ${darkMode ? "dark" : "light"}`}
                    placeholder={text}
                    onChange={onChange}
                    key={text}
                    name={text}
                ></input>
            )}
        </StyledFormInput>
    );
};

FormInput.defaultProps = {
    darkMode: false,
    text: "",
    textArea: false,
};
