import React, { createContext, useContext, useState, ReactNode } from "react";

interface categoryContextType {
  category: string | null;
  chooseCategory: (category: string) => void;
}
interface CategoryProviderProps {
  children: ReactNode;
}

const categoryContext = createContext<categoryContextType | undefined>(
  undefined,
);

const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [category, setCategory] = useState<string | null>();

  const chooseCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <categoryContext.Provider
      value={{ category: category || null, chooseCategory }}
    >
      {children}
    </categoryContext.Provider>
  );
};

const useContextCategory = (): categoryContextType => {
  const context = useContext(categoryContext);

  if (!context) {
    throw new Error("useContextCategory must be used within an AppProvider");
  }

  return context;
};

export { CategoryProvider, useContextCategory };
