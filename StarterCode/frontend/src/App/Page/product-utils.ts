const API_BASE_URL = 'http://localhost:5000';
//import { Product } from "./types";

export const fetchProductFromBackend = async () => {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    if (!response.ok) {
        throw new Error('Fail to fetch Products');
    }

    let ProductList = response.json().then((jsonResponse) => {
        console.log("data in fetch", jsonResponse);
        return jsonResponse.data;
    });

    console.log("data in fetch", ProductList);
    return ProductList;
};

export const deleteProductFromBackend = async (id) => {
    const response = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        method: "DELETE",
        
    });
    if (!response.ok) {
        throw new Error('Fail to delete Product');
    }
};