import { products } from "../../../mocks/products";
import { ProductCard } from "../ProductCard";
import { ProductsContainer, Separator } from "./styles";

export function Products() {
  return (
    <ProductsContainer>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <ProductCard product={product} />
            <Separator />
          </div>
        );
      })}
    </ProductsContainer>
  );
}
