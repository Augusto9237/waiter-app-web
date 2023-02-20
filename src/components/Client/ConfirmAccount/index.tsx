
import { Order } from "../../../types/Order";
import { formatCurrency } from "../../../utils/formatCurrency";

import { Actions, ContainerConfirmAccount, OrderDetails, SubtotalContent } from "./styles";
interface ConfirmPaymentProps {
  order: Order | null;
  filterPayment: string;
}

export function ConfirmAccount() {

  return (
    <ContainerConfirmAccount>
      <header>
        <strong>Sua conta</strong>
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
    </ContainerConfirmAccount>
  );
}
