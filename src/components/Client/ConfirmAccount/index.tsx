import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Order } from "../../../types/Order";
import { formatCurrency } from "../../../utils/formatCurrency";

import { Actions, ContainerOrderDetail, OrderDetails, SubtotalContent } from "./styles";
interface ConfirmPaymentProps {
  order: Order | null;
  filterPayment: string;
}


export function ConfirmAccount() {


  return (
    <ContainerOrderDetail>
      <header>
        <strong>Mesa 1</strong>
        <span>Atendente: careca</span>
        <span>Cliente: 1</span>
      </header>

      <OrderDetails>
        <strong>Itens</strong>
      
        <div className="total">
          <span>Total</span>
          <strong>{formatCurrency(100)}</strong>
        </div>
      </OrderDetails>

      <Actions>

        <button
          type="button"
          className="secondary"
        >
         <span>Fechar a conta</span>
        </button>
      </Actions>
    </ContainerOrderDetail>
  );
}
