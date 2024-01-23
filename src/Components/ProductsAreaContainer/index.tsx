import { ProductsBody } from "./ProductsBody";

type ProductAreaProps = {
  children: React.ReactNode;
};

export const ProductsAreaContainer: React.FC<ProductAreaProps> = ({
  children,
}) => {
  return <ProductsBody>{children}</ProductsBody>;
};
