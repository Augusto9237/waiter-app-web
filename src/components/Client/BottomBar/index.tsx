import { useContext, useState } from "react";

import { Button } from "../../Button";
import { CartCheckout } from "../CartCheckout";
import { BottomBarContainer, CartContent, BottomBarContentButtons } from "./styles";
import { Modal } from "../../Modal";
import { Link } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart, FaWallet } from "react-icons/fa";
import { ClientContext } from "../../../context/ClientContext";
interface CartProps {
  selectedTable: string;
  selectedClerk: string;
  selectedClient: string;
  onConfirmOrder: () => void;
  onOpenModalTable: () => void;
}
export function BottomBar({
  onConfirmOrder,
  selectedTable,
  selectedClerk,
  selectedClient,
  onOpenModalTable
}: CartProps) {
  const { cartItems, handleAddToCart, handleDecrementCartItem} = useContext(ClientContext);
 
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleClose() {
    setIsModalVisible(false);
  }


  return (
    <>
      <Modal title="Itens do Pedido" visible={isModalVisible} onClose={handleClose} >
        <CartCheckout
          cartItems={cartItems}
          onClose={handleClose}
          onAdd={handleAddToCart}
          onDecrement={handleDecrementCartItem}
          onConfirmOrder={onConfirmOrder}
          selectedTable={selectedTable}
          selectedClerk={selectedClerk}
          selectedClient={selectedClient}
        />
      </Modal>
      <BottomBarContainer>
        <CartContent>
          {!selectedTable &&

            <Button onClick={onOpenModalTable} title="Novo Pedido" />}

          {selectedTable &&
            <BottomBarContentButtons>
              <Link to=''>
                <button>
                  <AiFillHome size={26} />
                </button>
              </Link>


              <button onClick={() => setIsModalVisible(true)}>
                {cartItems.length > 0 && (
                  <span>{cartItems.length}</span>
                )}
                <FaShoppingCart size={24} />
              </button>


              <Link to={`/client/${selectedTable}/account`}>
                <button >
                  <FaWallet size={24} />
                </button>
              </Link>
            </BottomBarContentButtons>
          }
        </CartContent>
      </BottomBarContainer>
    </>
  );
}
