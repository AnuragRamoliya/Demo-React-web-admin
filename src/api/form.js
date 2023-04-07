import { callPostApi, callDeleteApi, callPutApi, callGetApi } from "./api";

export async function getAllForm() {
    try {
        const response = await callGetApi({ url: "form/getAll" });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getOneForm(id) {
    try {
        const response = await callGetApi({ url: `form/${id}`});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getFormByName(name) {
    try {
        const response = await callGetApi({ url: `form?name=${name}`});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function addFormFields(data) {
    try {
        const response = await callPostApi({ url: "form/add" ,body: data});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function updateFormFields(id,data) {
    try {
        const response = await callPutApi({ url: `form/${id}`,body: data});
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