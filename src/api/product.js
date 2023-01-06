import { callPostApi, callDeleteApi, callPutApi, callGetApi } from "./api";

export async function getAllProducts() {
    try {
        const response = await callGetApi({ url: "product/allProducts" });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getOneProduct() {
    try {
        const response = await callGetApi({ url: "product/:id"});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function updateProduct(data) {
    try {
        const response = await callPutApi({ url: "product/:id",body: data});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function deleteProduct() {
    try {
        const response = await callDeleteApi({ url: "product/:id"});
        return response;
    } catch (error) {
        throw error;
    }
}