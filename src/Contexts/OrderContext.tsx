import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Order } from '../types/Order';



interface OrderProviderProps {
  children: ReactNode;
}

interface orderContextType {
  order: Order | null;
  fetchOrder: (orderData:Order) => void;
}


const orderContext = createContext<orderContextType | undefined>(undefined);


const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<Order | null>(null);

  const fetchOrder = (orderData: Order) => {
    setOrder(orderData);
  };

  return (
    <orderContext.Provider value={{ order, fetchOrder, }}>
      {children}
    </orderContext.Provider>
  );
};


const useOrderContext = (): orderContextType => {
  const context = useContext(orderContext);

  if (!context) {
    throw new Error('useOrderContext must be used within an AppProvider');
  }

  return context;
};

export { OrderProvider, useOrderContext };
