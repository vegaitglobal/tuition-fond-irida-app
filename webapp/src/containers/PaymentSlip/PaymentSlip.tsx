import {StyledPaymentSlip} from "./PaymentSlip.style";
import {Button} from "components";
import {PaymentSlipInput} from "./PaymentSlipInput/PaymentSlipInput"
import Modal from 'react-modal';
import {useEffect, useState} from "react";
import {PaymentSlip as PaymentSlipModel} from "../../core/models/payment-slip";
import {fetchPaymentSlip} from "../../core/services/payment-slip.service";


interface Props {
    isOpen: boolean;
    closeModalDialog: () => void;
}

export const PaymentSlip = (props: Props) => {
    const {isOpen, closeModalDialog} = props;
    const [paymentSlip, setPaymentSlip] = useState<PaymentSlipModel>();

    useEffect(() => {
        fetchPaymentSlip().then((paymentSlip) => setPaymentSlip(paymentSlip));
    }, []);


    const closePaymentSlipModal = () => {
        closeModalDialog();
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
                        <PaymentSlipInput text="Uplatilac" key="sender" inputValue={paymentSlip?.sender ?? ''}
                                          darkMode={false}/>

                        <PaymentSlipInput text="Svrha uplate" key="purposeOfPayment"
                                          inputValue={paymentSlip?.purposeOfPayment ?? ''}
                                          darkMode={false}/>

                        <PaymentSlipInput text="Primalac" key="receiver" inputValue={paymentSlip?.receiver ?? ''}
                                          darkMode={false}/>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-row">

                            <div className="smaller-input">
                                <PaymentSlipInput text="Šifra plaćanja" key="codeOfPayment"
                                                  inputValue={paymentSlip?.codeOfPayment.toString() ?? ''}
                                                  darkMode={false}/>
                            </div>

                            <div className="smaller-input">
                                <PaymentSlipInput text="Valuta" key="currency" inputValue={paymentSlip?.currency ?? ''}
                                                  darkMode={false}/>
                            </div>

                            <PaymentSlipInput text="Iznos" key="amount"
                                              inputValue={paymentSlip?.amount.toString() ?? ''}
                                              darkMode={false}/>
                        </div>
                        <div className="grid-item-row">

                            <PaymentSlipInput text="Račun primaoca" key="receiverAccount"
                                              inputValue={paymentSlip?.receiverAccount ?? ''}
                                              darkMode={false}/>

                        </div>
                        <div className="grid-item-row">

                            <div className="smaller-input">
                                <PaymentSlipInput text="Broj modela" key="modelNumber"
                                                  inputValue={
                                                      (paymentSlip?.modelNumber.toString() === undefined || paymentSlip?.modelNumber.toString() === '0')
                                                          ? ''
                                                          : paymentSlip?.modelNumber.toString()}
                                                  darkMode={false}/>
                            </div>

                            <PaymentSlipInput text="Poziv na broj (odobrenje)" key="referenceNumber"
                                              inputValue={paymentSlip?.referenceNumber ?? ''}
                                              darkMode={false}/>
                        </div>
                    </div>
                </div>
                <Button variant="light" text="Hvala Vam!" onClick={() => closeModalDialog()}></Button>
            </StyledPaymentSlip>
        </Modal>
    );
};

PaymentSlip.defaultProps = {
    darkMode: true,
    showSizeDropdown: true,
};
