import {useState} from "react";
import Modal from 'react-modal';
import {StyledProductDetailsDialog} from "./ProductDetailsDialog.style";
import {Product} from "core/models/product";
import {Button} from "components/Button/Button";
import {Form} from "components/Form/Form";
import {StyledModalContent} from "components/Form/Form.style";


Modal.setAppElement('#root');

interface Props {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    onClose: () => void;
    product?: Product
}

export const ProductDetailsDialog = (props: Props) => {
    const {isOpen, setIsOpen, onClose, product} = props;

    const [showDetailsText, setShowDetailsText] = useState(true);
    const [showDonateForm, setShowDonateForm] = useState(false);
    const [showThankYouMessage, setShowThankYouMessage] = useState(false);


    const handleShowDonateForm = () => {
        setShowDetailsText(false)
        setShowDonateForm(true);
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
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
                    },
                    overlay: {
                        zIndex: 9999
                    }
                }}
            >
                <StyledProductDetailsDialog>
                    <div className="modal-wrap">
                        {showThankYouMessage ? (
                            <StyledModalContent>
                                <div className="modal-content-title">Hvala Vam!</div>
                                <div className="modal-content-description">Primili smo vašu porudžbinu</div>
                                <Button onClick={() => setIsOpen(false)} text="U redu" variant="light"/>
                            </StyledModalContent>
                        ) : (
                            <>
                                <div className="product-details-img">
                                    <img className="product-image" src={product?.image.file.url}
                                         alt={product?.image.title}/>
                                </div>
                                {showDetailsText && <div className="product-details-content">
                                    <div>
                                        <h3 className="product-details-title">{product?.title}</h3>
                                        <p className="product-detail-description">{product?.description}</p>
                                    </div>
                                    <Button variant="light" text="Poruči i doniraj"
                                            onClick={handleShowDonateForm}></Button>
                                </div>}
                                {showDonateForm && product && <div className="donate-form-wrap">
                                    <Form
                                        isContactForm={false}
                                        darkMode={false}
                                        sendButtonText="Poruči i doniraj"
                                        sendButtonVariant="accent"
                                        onClick={() => setShowThankYouMessage(true)}
                                        productName={product.title}
                                        sizeOptions={product.sizes}
                                    />
                                </div>}
                            </>
                        )}
                    </div>
                </StyledProductDetailsDialog>
            </Modal>
        </div>
    );
};
