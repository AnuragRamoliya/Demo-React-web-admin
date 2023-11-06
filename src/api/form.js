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

export async function deleteFormFields(id) {
    try {
        const response = await callDeleteApi({ url: `form/delete/field/${id}`});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function deleteForm(id) {
    try {
        const response = await callDeleteApi({ url: `form/${id}`});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getFormList() {
    try {
        const response = await callGetApi({ url: "form/form/list" });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getField(data) {
    try {
        const response = await callPostApi({ url: `form/get/field` ,body: data});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function addFields(data) {
    try {
        const response = await callPostApi({ url: "form/add/field" ,body: data});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function updateFields(data) {
    try {
        const response = await callPutApi({ url: "form/field/update" ,body: data});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getInputTypes() {
    try {
        const response = await callGetApi({ url: "form/input/types" });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function addFieldOptions(data) {
    try {
        const response = await callPostApi({ url: "form/options/add" ,body: data});
        return response;
    } catch (error) {
        throw error;
    }
}