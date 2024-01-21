import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Produto } from '../types/Produto';

interface ProductContextType {
    produtoSelecionado: Produto[] | [];
    productChoosenList: Produto[] | [];
    chooseProduct: (product:Produto[]) => void;
}
interface ProductProviderProps {
    children: ReactNode;
}

const productContext = createContext<ProductContextType | undefined>(undefined);

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [produto, setProduto] = useState<Produto [] | [] >([]);

    const chooseProduct = (product:Produto[]) => {
        setProduto(product);
    };

    return (
        <productContext.Provider value={{ produtoSelecionado: produto || [], productChoosenList: [], chooseProduct }}>
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