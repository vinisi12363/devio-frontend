import { Produto } from "./Produto";


export type Order = {
    total: number;
    products: Produto[];
    observacao: string | null;
    nomeCliente: string;
    numeroPedido:number;
    status: "preparando" | "pronto" | "entregue" | "cancelado";
 }