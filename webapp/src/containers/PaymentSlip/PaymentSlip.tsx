import { StyledPaymentSlip } from "./PaymentSlip.style";
import { Button } from "components";
import { PaymentSlipInput } from "./PaymentSlipInput/PaymentSlipInput"
import { useState } from "react";
import Modal from 'react-modal';


interface Props {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    payer: string;
    paymentPurpose: string;
    recipient: string;
    paymentCode: string;
    currency: string;
    amount: string;
    recipientAccount: string;
    //modelNumber: string;
    //referenceNumber: string;
    buttonText: string;
    buttonUrl: string;
    //stayAnonymousCheck: boolean;
    
}

export const PaymentSlip = (props: Props) => {
    const { payer, paymentPurpose, recipient, paymentCode, currency, amount, recipientAccount, 
        buttonText, buttonUrl, isOpen, setIsOpen } = props;

        const [userData, setUserData] = useState({});

        const onInputChange = (event: any) => {
            const { name: key, value } = event.target;
            setUserData((prev: any) => ({
                ...prev,
                [key]: value,
            }));
        };
    
    const closePaymentSlipModal = () => {
        setIsOpen(false);
    }

    return (
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
            position: "relative",
          },
          overlay: {
            zIndex: 9999
          }
        }}
      >
        <StyledPaymentSlip>
            <button className="btn-modal-close" onClick={closePaymentSlipModal}>X</button>
            <div className="grid-container">
                <div className="grid-item">
                    <PaymentSlipInput text="Uplatilac" key="uplatilac" inputValue="Lorem ipsum "
                            darkMode={false} onChange={onInputChange}></PaymentSlipInput>
                    <PaymentSlipInput text="Svrha uplate" key="svrhaUplate" inputValue="Lorem ipsum dolor "
                            darkMode={false} onChange={onInputChange}></PaymentSlipInput>
                    <PaymentSlipInput text="Primalac" key="primalac" inputValue="Lorem ipsum dolor sit amet"
                            darkMode={false} onChange={onInputChange}></PaymentSlipInput>
                </div>
                <div className="grid-item">
                    <div className="grid-item-row">
                        <div className="smaller-input">
                            <PaymentSlipInput text="Šifra plaćanja" key="sifraPlacanja" inputValue="165"
                                    darkMode={false} onChange={onInputChange}></PaymentSlipInput>
                        </div>
                        <div className="smaller-input">
                        <PaymentSlipInput text="Valuta" key="valuta" inputValue="RSD"
                                darkMode={false} onChange={onInputChange}></PaymentSlipInput>
                        </div>
                        <PaymentSlipInput text="Iznos" key="iznos" inputValue="100.000,00"
                                darkMode={false} onChange={onInputChange}></PaymentSlipInput>
                    </div>
                    <div className="grid-item-row">
                        <PaymentSlipInput text="Račun primaoca" key="racunPrimaoca" inputValue="250-55555656564254-13"
                                    darkMode={false} onChange={onInputChange}></PaymentSlipInput>
                    </div>
                    <div className="grid-item-row">
                        <div className="smaller-input">
                            <PaymentSlipInput text="Broj modela" key="brojModela" inputValue=""
                                darkMode={false} onChange={onInputChange}></PaymentSlipInput>
                        </div>
                        <PaymentSlipInput text="Poziv na broj (odobrenje)" key="pozivNaBroj" inputValue=""
                                darkMode={false} onChange={onInputChange}></PaymentSlipInput>
                    </div>
                </div>
            </div>
            <Button variant="light" text="Hvala Vam!"></Button>
        </StyledPaymentSlip>
        </Modal>
    );
};

PaymentSlip.defaultProps = {
    darkMode: true,
    showSizeDropdown: true,
};
