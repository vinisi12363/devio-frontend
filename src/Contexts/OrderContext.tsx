// Exemplo de arquivo AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';



interface OrderProviderProps {
  children: ReactNode;
}

interface orderContextType {
  order: string | null;
  fetchorder: (orderData:string) => void;
}


const orderContext = createContext<orderContextType | undefined>(undefined);


const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setorder] = useState<string | null>(null);

  const fetchorder = (orderData: string) => {
    setorder(orderData);
  };

  return (
    <orderContext.Provider value={{ order, fetchorder, }}>
      {children}
    </orderContext.Provider>
  );
};

// Criar um hook personalizado para consumir o contexto
const useOrderContext = (): orderContextType => {
  const context = useContext(orderContext);

  if (!context) {
    throw new Error('useOrderContext must be used within an AppProvider');
  }

  return context;
};

export { OrderProvider, useOrderContext };
