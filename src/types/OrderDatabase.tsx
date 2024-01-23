import { Produto } from "./Produto";

export type OrderDatabase = {
  total: number;
  products: Produto[];
  metodopagamento: "dinheiro" | "cartão" | "pix" | null;
  troco: number;
  observacao: string | null;
  nomecliente: string;
  numeropedido: number;
  status: "preparando" | "pronto" | "entregue" | "cancelado" | null;
};
