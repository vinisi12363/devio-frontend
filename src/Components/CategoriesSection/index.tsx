import React from "react";
import { CategoriesContainer } from "./CategoriesContainer";

type CategorieContainerProps = {
  children: React.ReactNode;
};

export const CategoriesSection: React.FC<CategorieContainerProps> = ({
  children,
}) => {
  return <CategoriesContainer>{children}</CategoriesContainer>;
};
