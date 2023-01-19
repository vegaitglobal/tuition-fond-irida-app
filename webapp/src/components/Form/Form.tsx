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
    setSentSuccessfully: React.Dispatch<React.SetStateAction<boolean>>;
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
        setSentSuccessfully,
    } = props;

    const [contactedSuccessfully, setContactedSuccessfully] = useState(false);
    const [userData, setUserData] = useState(new User("", "", "", "", "", ""));
    const [isOpen, setIsOpen] = useState(false);

    const [errors, setErrors] = useState(new Map([
        ["firstName", "Ovo polje je obavezno"],
        ["lastName", "Ovo polje je obavezno"],
        ["email", "Ovo polje je obavezno"],
        ["phoneNumber", "Ovo polje je obavezno"],
    ]));

    const onEmailChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            emailAddress: value,
        }));
        errors.set("email", "")
        setErrors(errors);
        if (value.length === 0) {
            errors.set("email", "Ovo polje je obavezno")
            setErrors(errors);
        }
    };

    const onFirstNameChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            firstName: value,
        }));
        errors.set("firstName", "")
        setErrors(errors);
        if (value.length === 0) {
            errors.set("firstName", "Ovo polje je obavezno")
            setErrors(errors);
        }
    };

    const onLastNameChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            lastName: value,
        }));
        errors.set("lastName", "")
        setErrors(errors);
        if (value.length === 0) {
            errors.set("lastName", "Ovo polje je obavezno")
            setErrors(errors);
        }
    };

    const onPhoneNumberChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            phoneNumber: value,
        }));
        errors.set("phoneNumber", "")
        setErrors(errors);
        if (value.length === 0) {
            errors.set("phoneNumber", "Ovo polje je obavezno")
            setErrors(errors);
        }
    };

    const onCommentChange = (event: any) => {
        const { value } = event.target;
        setUserData((prev: any) => ({
            ...prev,
            additionalComment: value,
        }));
    };

    const onClick = () => {
        if (!formValid()) {
            return
        }

        if (isContactForm) {
            sendContactUsEmailAsync(userData)
                .then(() => {
                    setIsOpen(true);
                    setUserData(new User("", "", "", "", "", ""));
                    setSentSuccessfully(true);
                    setContactedSuccessfully(true);
                    props.onClick();
                }).catch(() => {
                    setIsOpen(true);
                    setSentSuccessfully(false)
                    setContactedSuccessfully(false);
                    props.onClick();
                });
        } else {
            sendOrderEmailAsync({
                ...userData,
                selectedSize: userData.size!,
                productName: productName!
            })
                .then(() => {
                    setIsOpen(true);
                    setUserData(new User("", "", "", "", "", ""));
                    setSentSuccessfully(true)
                    setContactedSuccessfully(true);
                    props.onClick();
                }).catch(() => {
                    setIsOpen(true);
                    setSentSuccessfully(false);
                    setContactedSuccessfully(false);
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

    const formValid = () => {
        // Ovaj ruzan kod je potreban da bi pogodili ES5 verziju javaskripta.
        for (const entry of Array.from(errors)) {
            const value = entry[1]
            if (value !== "") {
                return false
            }
        };
        return true;
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                style={{
                    content: {
                        top: '50%',
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        width: "calc(100vw - 40px)",
                        maxWidth: "1258px",
                        borderRadius: "50px",
                        border: "none",
                        backgroundColor: "#5F4477",
                        padding: "50px",
                        justifyContent: "center",
                    },
                    overlay: {
                        zIndex: 9999
                    }
                }}
            >
                {contactedSuccessfully ? (
                    <StyledModalContent>
                        <div className="modal-content-title">Poslato</div>
                        <div className="modal-content-description">Vaša poruka je poslata.</div>
                        <Button onClick={() => setIsOpen(false)} text="U redu" variant="light"/>
                    </StyledModalContent>
                ) : (
                    <StyledModalContent>
                        <div className="modal-content-title">Greška</div>
                        <div className="modal-content-description">Došlo je do greške tokom slanja Vaše poruke. Molimo pokušajte kasnije.</div>
                        <Button onClick={() => setIsOpen(false)} text="U redu" variant="light"/>
                    </StyledModalContent>
                )}
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
                            validationError={errors.get("firstName")}
                        ></FormInput>
                        <FormInput
                            text="Prezime"
                            key="lastName"
                            value={userData.lastName}
                            darkMode={darkMode}
                            onChange={onLastNameChange}
                            validationError={errors.get("lastName")}
                        ></FormInput>
                    </div>
                    <FormInput
                        text="Email"
                        key="email"
                        value={userData.emailAddress}
                        darkMode={darkMode}
                        onChange={onEmailChange}
                        validationError={errors.get("email")}
                    ></FormInput>
                    <FormInput
                        text="Broj telefona"
                        key="phoneNumber"
                        value={userData.phoneNumber}
                        darkMode={darkMode}
                        onChange={onPhoneNumberChange}
                        validationError={errors.get("phoneNumber")}
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
    setSentSuccessfully: () => {},
};
