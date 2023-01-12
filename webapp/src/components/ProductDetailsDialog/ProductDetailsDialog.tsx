import {useState} from "react";
import {StyledProductDetailsDialog} from "./ProductDetailsDialog.style";
import Modal from 'react-modal';
import { Product } from "core/models/product";
import { Button } from "components/Button/Button";
import { Form } from "components/Form/Form";


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
            {showDonateForm && <Form darkMode={true} showSizeDropdown={true} onClick={() => setIsOpen(false)}/>}
          </div>
        </StyledProductDetailsDialog>
      </Modal>
    </div>
  );
};
