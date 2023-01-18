import { useState } from "react";
import Modal from "react-modal";
import { Button } from "components/Button/Button";
import { User } from "core/models/user";
import { sendContactUsEmailAsync, sendOrderEmailAsync } from "core/services/email.service";
import { StyledForm, StyledModalContent } from "./Form.style";
import { FormInput } from "./FormInput/FormInput";

interface Props {
    darkMode: boolean;
    sendButtonText: string;
    sendButtonVariant: "primary" | "secondary" | "accent" | "outlined" | "light" | "default";
    onClick: () => void;
    isContactForm?: boolean;
    productName?: string;
    sizeOptions?: string[];
}

export const Form = (props: Props) => {
    const {
        darkMode,
        sizeOptions = [],
        sendButtonText,
        sendButtonVariant,
        isContactForm,
        productName,
    } = props;
    const [userData, setUserData] = useState(new User("", "", "", "", "", ""));
    const [isOpen, setIsOpen] = useState(false);

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
        if (isContactForm) {
            sendContactUsEmailAsync(userData).then(() => {
                setIsOpen(true);
                setUserData(new User("", "", "", "", "", ""));
                props.onClick();
            });
            props.onClick();
        } else {
            sendOrderEmailAsync({
                ...userData,
                selectedSize: userData.size!,
                productName: productName!,
            }).then(() => {
                setIsOpen(true);
                setUserData(new User("", "", "", "", "", ""));
                props.onClick();
            });
        }
    };

    const handleSelect = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            size: value,
        }));
    };

    return (
        <>
            <Modal isOpen={isOpen}>
                <StyledModalContent>
                    <div className="modal-content-title">Poslato</div>
                    <div className="modal-content-description">Vaša poruka je poslata.</div>
                    <Button onClick={() => setIsOpen(false)} text="U redu" variant="light" />
                </StyledModalContent>
            </Modal>
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
                    {sizeOptions.length > 0 && (
                        <select onChange={handleSelect}>
                            {sizeOptions.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>
                    )}
                    <div className="button-container">
                        <Button
                            onClick={onClick}
                            text={sendButtonText}
                            variant={sendButtonVariant}
                        />
                    </div>
                </div>
            </StyledForm>
        </>
    );
};

Form.defaultProps = {
    darkMode: true,
    showSizeDropdown: true,
    sendButtonText: "Pošalji",
    sendButtonVariant: "primary",
    onClick: () => {},
};
