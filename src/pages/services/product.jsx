import { fetchApi } from "../../components/config/api";

const API_URL_PROD = import.meta.env.VITE_API_URL_PROD;
const BASE_URL_API_DEV = import.meta.env.VITE_API_URL_DEV;

//get all products
export const getProducts = async() => {
    try {
        const url = `${BASE_URL_API_DEV}/products`;
        const response = await fetchApi({ url, method: "GET"});

        if (response.status !== 200) {
            const error = {
                status : true,
                message : "Failed to get data!",
            };
            return error;
        }

        return response;
    } catch (error) {
        console.log(error);
    }
};

//get product by id 
export const getProductById = async (id) => {
    try {
        const url = `${BASE_URL_API_DEV}/products`;
        const response = await fetchApi({ url, method: "GET"});

        return response;
    } catch (error) {
        console.log(error);
    }
};

//add product
export const addProduct = async (data) => {
    try {
        const url = `${BASE_URL_API_DEV}/products`;
        const response = await fetchApi({ url, method: "POST", data});
        
        return response;
    } catch (error) {
        console.log(error);
    }
};

//update product
export const updateProduct = async (id,data) => {
    try {
        const url = `${BASE_URL_API_DEV}/products/${id}`;
        const response = await fetchApi({ url, method: "PUT", data});
        
        return response;
    } catch (error) {
        console.log(error);
    }
}