import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Produto } from '../types/Produto';

interface ProductContextType {
    productChoosen: Produto | null;
    productChoosenList: Produto[] | [];
    chooseProduct: (product:Produto) => void;
}
interface ProductProviderProps {
    children: ReactNode;
}

const productContext = createContext<ProductContextType | undefined>(undefined);

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [produto, setProduto] = useState<Produto | null>();

    const chooseProduct = (product:Produto) => {
        setProduto(product);
    };

    return (
        <productContext.Provider value={{ productChoosen: produto || null, chooseProduct , productChoosenList:[] }}>
            {children}
        </productContext.Provider>
    );


}

const useContextProduct= (): ProductContextType => {
    const context = useContext(productContext);

    if (!context) {
        throw new Error('useContextCategory must be used within an AppProvider');
    }

    return context;
}

export { ProductProvider, useContextProduct };