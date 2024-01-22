import React, { createContext, useContext, useState, ReactNode } from "react";
import { OrderDatabase } from "../types/OrderDatabase";
interface OrderProviderProps {
  children: ReactNode;
}

interface orderContextType {
  databaseOrder: OrderDatabase[] | null;
  fetchDatabaseOrder: (orderData: OrderDatabase[]) => void;
}

const orderContext = createContext<orderContextType | undefined>(undefined);

const DatabaseOrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [databaseOrder, setDatabaseOrder] = useState<OrderDatabase[] | []>([]);

  const fetchDatabaseOrder = (orderData: OrderDatabase[]) => {
    setDatabaseOrder(orderData);
  };

  return (
    <orderContext.Provider value={{ databaseOrder, fetchDatabaseOrder }}>
      {children}
    </orderContext.Provider>
  );
};

const useContextDatabaseOrder = (): orderContextType => {
  const context = useContext(orderContext);

  if (!context) {
    throw new Error("useOrderContext must be used within an AppProvider");
  }

  return context;
};

export { DatabaseOrderProvider, useContextDatabaseOrder };
