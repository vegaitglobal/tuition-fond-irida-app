import {useState} from "react";
import Modal from 'react-modal';
import {StyledProductDetailsDialog} from "./ProductDetailsDialog.style";
import { Product } from "core/models/product";
import { Button } from "components/Button/Button";
import { Form } from "components/Form/Form";
import { StyledModalContent } from "components/Form/Form.style";


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
                <div className="modal-content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio vel nunc fringilla euismod eget non eros. Morbi convallis auctor lectus eu facilisis. Aenean vitae lectus mollis, finibus arcu vel, aliquam est. Etiam gravida lectus quis vestibulum aliquam. Sed nec quam eget eros eleifend vehicula.Aenean vitae lectus mollis, finibus arcu vel, aliquam est. Etiam gravida lectus quis vestibulum aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <Button onClick={() => setIsOpen(false)} text="U redu" variant="light" />
              </StyledModalContent>
            ) : (
              <>
                <div className="product-details-img">
                  <img className="product-image" src={product?.image.file.url} alt={product?.image.title} />
                </div>
                {showDetailsText && <div className="product-details-content">
                  <div>
                    <h3 className="product-details-title">{product?.title}</h3>
                    <p className="product-detail-description">{product?.description}</p>
                  </div>
                  <Button variant="light" text="Poruči i doniraj" onClick={handleShowDonateForm}></Button>
                </div>}
                {showDonateForm && <Form
                  darkMode={false}
                  showSizeDropdown={true}
                  sendButtonText="Poruči i doniraj"
                  sendButtonVariant="accent"
                  onClick={() => setShowThankYouMessage(true)}
                />}
              </>
            )}
          </div>
        </StyledProductDetailsDialog>
      </Modal>
    </div>
  );
};
