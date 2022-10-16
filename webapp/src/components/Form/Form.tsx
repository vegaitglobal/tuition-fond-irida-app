import { useState } from "react";
import { StyledForm } from "./Form.style";
import { FormInput } from "./FormInput/FormInput";

interface Props {
    darkMode: boolean;
    showSizeDropdown: boolean;
}
export const Form = (props: Props) => {
    const { darkMode, showSizeDropdown } = props;
    // TODO - propagate sizes
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
    const [userData, setUserData] = useState({});

    const onInputChange = (event: any) => {
        const { name: key, value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSelect = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            size: value,
        }));
    };

    return (
        <StyledForm>
            <div className={`container ${darkMode ? "dark" : "light"}`}>
                <div className="horizontal-container">
                    <FormInput
                        text="Ime"
                        key="ime"
                        darkMode={darkMode}
                        onChange={onInputChange}
                    ></FormInput>
                    <FormInput
                        text="Prezime"
                        key="prezime"
                        darkMode={darkMode}
                        onChange={onInputChange}
                    ></FormInput>
                </div>
                <FormInput
                    text="Email"
                    key="email"
                    darkMode={darkMode}
                    onChange={onInputChange}
                ></FormInput>
                <FormInput
                    text="Broj telefona"
                    key="brojTelefona"
                    darkMode={darkMode}
                    onChange={onInputChange}
                ></FormInput>
                <FormInput
                    text="Komentar"
                    key="komentar"
                    textArea
                    darkMode={darkMode}
                    onChange={onInputChange}
                ></FormInput>
                {showSizeDropdown && (
                    <select onChange={handleSelect}>
                        {sizeOptions.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                )}
            </div>
        </StyledForm>
    );
};

Form.defaultProps = {
    darkMode: true,
    showSizeDropdown: true,
};
