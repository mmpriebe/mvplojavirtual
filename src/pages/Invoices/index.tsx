/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import {
  CheckBox,
  DivFlexDirectioRow,
  Label,
  LightButton,
  Table,
  Tbody,
  Td,
  TextField,
  Th,
  Thead,
  Tr
} from "../../uikit";
import { InvoiceContainer, InvoiceTitle } from "./style";
import { FiSearch } from "react-icons/fi";
import { calculateShipping, createPurchase, getCart, getInvoices } from "../../client/axios";
import Button from "../../components/Button";
import { FaCartArrowDown } from "react-icons/fa6";

export default function Cart() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  

  useEffect(() => {
    getInvoicesAPI();
  }, [])

  const getInvoicesAPI = async () => {
    const result = await getInvoices();
    console.log(result)
    setInvoices(result)
  }


  const [invoices, setInvoices] = useState<any>();


  

  return (
    <>
      <Menu />
      <InvoiceContainer>
        <InvoiceTitle>SEUS PEDIDOS <FaCartArrowDown size={25} /></InvoiceTitle>
        <Table>
          <Thead>
            <Tr>
              <Th>Pedido</Th>
              <Th>Data</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {invoices && invoices.map((invoice: any) => (
              <Tr>
                <Td>{invoice.id}</Td>
                <Td>{invoice.data}</Td>
                <Td>{invoice.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </InvoiceContainer>
    </>
  )}

