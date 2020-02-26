import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/bicicleta-gts-aro-29-freio-a-disco-cambio-traseiro-gtsm1-tsi-21-marchas-e-amortecedor-ride/02/ABS-0241-002/ABS-0241-002_zoom2.jpg?ims=326x"
                alt="Bike"
              />
            </td>
            <td>
              <strong>Bike muito boa</strong>
              <span>R$2500,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#f58634" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#f58634" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$3000,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#f58634" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$2500,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
