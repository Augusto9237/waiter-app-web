import { useContext } from "react";
import { ClientContext } from "../../../context/ClientContext";
import { ProductType } from "../../../types/Products";
import { formatCurrency } from "../../../utils/formatCurrency";
import {
  ButtonAddProduct,
  ProductCardContainer,
  ProductDetails,
  ProductImage,
  Separator,
} from "./styles";

interface ProductCardProps {
  product: null | ProductType;
  onOpenModal: (product: ProductType) => void;
}

export function ProductCard({
  product,
  onOpenModal,
}: ProductCardProps) {

  const {handleAddToCart } = useContext(ClientContext);

  return (
    <>
      <ProductCardContainer>
        <ProductImage onClick={() => onOpenModal(product!)}>
          <img src={`http://192.168.100.41:3001/uploads/${product?.imagePath}`} alt={product?.name} />
        </ProductImage>

        <ProductDetails>
          <h4 className="Product-name">{product?.name}</h4>
          <span className="Product-description">{product?.description}</span>
          <strong className="Product-description">
            {formatCurrency(product?.price || 0)}
          </strong>
        </ProductDetails>

        <ButtonAddProduct onClick={() => handleAddToCart(product!)}>
          <span>+</span>
        </ButtonAddProduct>
      </ProductCardContainer>
      <Separator />
    </>
  );
}
