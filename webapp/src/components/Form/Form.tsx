import { Button } from "components/Button/Button";
import { User } from "core/models/user";
import { sendContactUsEmailAsync } from "core/services/email.service";
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
    const [userData, setUserData] = useState({} as User);

    const onEmailChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            emailAddress: value,
        }));
    };

    const onFirstNameChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            firstName: value,
        }));
    };

    const onLastNameChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            lastName: value,
        }));
    };

    const onPhoneNumberChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            phoneNumber: value,
        }));
    };

    const onCommentChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            additionalComment: value,
        }));
    };

    const onClick = () => {
        sendContactUsEmailAsync(userData);
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
            <div id="contact-us-form" className={`container ${darkMode ? "dark" : "light"}`}>
                <div className="horizontal-container">
                    <FormInput
                        text="Ime"
                        key="name"
                        darkMode={darkMode}
                        onChange={onFirstNameChange}
                    ></FormInput>
                    <FormInput
                        text="Prezime"
                        key="lastName"
                        darkMode={darkMode}
                        onChange={onLastNameChange}
                    ></FormInput>
                </div>
                <FormInput
                    text="Email"
                    key="email"
                    darkMode={darkMode}
                    onChange={onEmailChange}
                ></FormInput>
                <FormInput
                    text="Broj telefona"
                    key="phoneNumber"
                    darkMode={darkMode}
                    onChange={onPhoneNumberChange}
                ></FormInput>
                <FormInput
                    text="Komentar"
                    key="comment"
                    textArea
                    darkMode={darkMode}
                    onChange={onCommentChange}
                ></FormInput>
                {showSizeDropdown && (
                    <select onChange={handleSelect}>
                        {sizeOptions.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                )}
                <div className="button-container">
                    <Button onClick={onClick} text="Pošalji" variant="primary" />
                </div>
            </div>
        </StyledForm>
    );
};

Form.defaultProps = {
    darkMode: true,
    showSizeDropdown: true,
};
