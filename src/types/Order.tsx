import { Produto } from "./Produto";

export type Order = {
  total: number;
  products: Produto[];
  metodoPagamento: "dinheiro" | "cartão" | "pix" | null;
  troco: number;
  observacao: string | null;
  nomeCliente: string;
  numeroPedido: number;
  status: "preparando" | "pronto" | "entregue" | "cancelado" | null;
};
