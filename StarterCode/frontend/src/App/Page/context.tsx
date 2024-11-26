import React, { createContext, useState } from "react";
import { Product } from "./types";

interface AppContextType {
    prod: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ex = [
    { id: "1", name: "one", description: "Groceries", price: 100, imageUrl:"" },
    { id: "1", name: "one", description: "Groceries", price: 100, imageUrl:"" }
];

const initial: AppContextType = {
    prod: [],
    setProducts: () => {}
};

export const AppContext = createContext<AppContextType>(initial);

export const AppProvider = (props: any) => {
    const [products, setProducts] = useState<Product[]>(initial.prod);

    return (
        <AppContext.Provider value={{prod: products, setProducts: setProducts}}>
            {props.children}
        </AppContext.Provider>
    );
}

