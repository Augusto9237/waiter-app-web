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
  onAddToCart: (product: ProductType) => void;
  onOpenModal: (product: ProductType) => void;
}

export function ProductCard({
  product,
  onAddToCart,
  onOpenModal,
}: ProductCardProps) {
  return (
    <>
      <ProductCardContainer>
        <ProductImage onClick={() => onOpenModal(product!)}>
          <img src={product?.imagePath} alt={product?.name} />
        </ProductImage>

        <ProductDetails>
          <h4 className="Product-name">{product?.name}</h4>
          <span className="Product-description">{product?.description}</span>
          <strong className="Product-description">
            {formatCurrency(product?.price || 0)}
          </strong>
        </ProductDetails>

        <ButtonAddProduct onClick={() => onAddToCart(product!)}>
          <span>+</span>
        </ButtonAddProduct>
      </ProductCardContainer>
      <Separator />
    </>
  );
}
