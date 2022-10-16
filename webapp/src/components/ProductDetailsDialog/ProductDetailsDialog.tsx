import { StyledProductDetailsDialog } from "./ProductDetailsDialog.style";
import Modal from 'react-modal';
import { Product } from "core/models/product";
import { Button } from "components/Button/Button";

Modal.setAppElement('#root');

interface Props {
  isOpen: boolean;
  onClose: () => void;
  product?: Product
}

export const ProductDetailsDialog = (props: Props) => {
  const { isOpen, onClose, product } = props;

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
            <div className="product-details-content">
              <div>
                <h3 className="product-details-title">{product?.title}</h3>
                <p className="product-detail-description">{product?.description}</p>
              </div>
              <Button variant="light" text="Poruči i doniraj" onClick={() => console.log("Prouci i doniraj klik")}></Button>
            </div>
          </div>
        </StyledProductDetailsDialog>
      </Modal>
    </div>
  );
};
