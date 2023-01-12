import { Button } from "components/Button/Button";
import { User } from "core/models/user";
import { sendContactUsEmailAsync } from "core/services/email.service";
import { useState } from "react";
import { StyledForm } from "./Form.style";
import { FormInput } from "./FormInput/FormInput";

interface Props {
    darkMode: boolean;
    showSizeDropdown: boolean;
    sendButtonText: string;
    sendButtonVariant: "primary" | "secondary" | "accent" | "outlined" | "light" | "default";
    onClick: () => void;
}
export const Form = (props: Props) => {
    const { darkMode, showSizeDropdown, sendButtonVariant } = props;
    // TODO - propagate sizes
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
    const [userData, setUserData] = useState(new User("", "", "", "", "", ""));
    const [sendButtonText, setSendButtonText] = useState(props.sendButtonText)

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

    const sleep = (milliseconds: number) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const onClick = () => {
        sendContactUsEmailAsync(userData);
        setSendButtonText("Uspešno poslato!");
        sleep(2200).then(r => {
            setSendButtonText("Pošalji");
            setUserData(new User("", "", "", "", "", ""));
        });
        props.onClick();
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
                        value={userData.firstName}
                        darkMode={darkMode}
                        onChange={onFirstNameChange}
                    ></FormInput>
                    <FormInput
                        text="Prezime"
                        key="lastName"
                        value={userData.lastName}
                        darkMode={darkMode}
                        onChange={onLastNameChange}
                    ></FormInput>
                </div>
                <FormInput
                    text="Email"
                    key="email"
                    value={userData.emailAddress}
                    darkMode={darkMode}
                    onChange={onEmailChange}
                ></FormInput>
                <FormInput
                    text="Broj telefona"
                    key="phoneNumber"
                    value={userData.phoneNumber}
                    darkMode={darkMode}
                    onChange={onPhoneNumberChange}
                ></FormInput>
                <FormInput
                    text="Komentar"
                    key="comment"
                    value={userData.additionalComment}
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
                    <Button onClick={onClick} text={sendButtonText} variant={sendButtonVariant}/>
                </div>
            </div>
        </StyledForm>
    );
};

Form.defaultProps = {
    darkMode: true,
    showSizeDropdown: true,
    sendButtonText: "Pošalji",
    sendButtonVariant: "primary",
    onClick: () => {},
};
