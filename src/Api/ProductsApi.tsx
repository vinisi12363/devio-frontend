import ApiConnection from "../Services/ApiConnection";

async function getAllProducts() {
    const { data } = await ApiConnection.get('/products');
    return data;
}


export const ProductsApi = {
    getAllProducts
}