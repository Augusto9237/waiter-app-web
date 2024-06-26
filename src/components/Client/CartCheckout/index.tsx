import { toast } from "react-toastify";
import { CartItem } from "../../../types/CartItem";
import { ProductType } from "../../../types/Products";
import { api } from "../../../utils/api";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../Button";

import {

  CartContent,
  FooterCart,
  PriceContainer,
  Item,
  ProductContainer,
  QuantityContainer,
  ProductDetails,
  Actions,
  ImageItem,
} from "./styles";

interface CartModalProps {
 
  cartItems: CartItem[];
  selectedTable: string;
  selectedClerk: string;
  selectedClient: string;
  onClose: () => void;
  onAdd: (product: ProductType) => void;
  onDecrement: (product: ProductType) => void;
  onConfirmOrder: () => void;
}

export function CartCheckout({
  
  onClose,
  cartItems,
  onAdd,
  onDecrement,
  onConfirmOrder,
  selectedTable,
  selectedClerk,
  selectedClient
}: CartModalProps) {

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  async function handleConfirmOrder() {

    await api.post('/orders', {
      table: selectedTable,
      clerk: selectedClerk,
      client: selectedClient,
      products: cartItems.map((cartItem) => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity
      })),
      total: total
    });

  }

  function handleOk() {
    handleConfirmOrder();
    toast.success('Pedido confirmado', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    onConfirmOrder();
    onClose();

  }



  return (
    <>
      <CartContent>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((cartItem) => (
              <>
                <Item>
                  <ProductContainer>
                    <ImageItem>
                      <img src={`http://192.168.100.41:3001/uploads/${cartItem.product.imagePath}`} />
                    </ImageItem>


                    <ProductDetails>
                      <strong>{cartItem.product.name}</strong>
                      <span>{formatCurrency(cartItem.product.price)}</span>
                    </ProductDetails>
                  </ProductContainer>

                  <Actions>
                    <button type="button" onClick={() => onAdd(cartItem.product)}>
                      <span>+</span>
                    </button>

                    <QuantityContainer>
                      <span>{cartItem.quantity}</span>
                    </QuantityContainer>

                    <button
                      type="button"
                      onClick={() => onDecrement(cartItem.product)}
                    >
                      <span>-</span>
                    </button>
                  </Actions>
                </Item>
              </>
            ))
            }
          </>
        ) : (
          <span>Seu carrinho está vazio</span>
        )}
      </CartContent>

      <FooterCart>
        <PriceContainer>
          <span>Total</span>
          <strong>{formatCurrency(total)}</strong>
        </PriceContainer>

        <Button
          onClick={handleOk}
          disabled={cartItems.length === 0}
          title="Confirmar pedido"
        />
      </FooterCart>
    </>
  );
}
