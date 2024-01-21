import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Order } from '../types/Order';



interface OrderProviderProps {
  children: ReactNode;
}

interface orderContextType {
  order: Order | null;
  createOrder: (orderData:Order) => void;
}


const orderContext = createContext<orderContextType | undefined>(undefined);


const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<Order | null>(null);

  const createOrder = (orderData: Order) => {
    setOrder(orderData);
  };

  return (
    <orderContext.Provider value={{ order, createOrder, }}>
      {children}
    </orderContext.Provider>
  );
};


const useContextOrder = (): orderContextType => {
  const context = useContext(orderContext);

  if (!context) {
    throw new Error('useOrderContext must be used within an AppProvider');
  }

  return context;
};

export { OrderProvider, useContextOrder };
