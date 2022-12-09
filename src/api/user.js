import { callPostApi, callDeleteApi, callPutApi, callGetApi } from "./api";

export async function userLogin(data) {
    try {
        const response = await callPostApi({ url: "user/signin", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function userRegister(data) {
    try {
        const response = await callPostApi({ url: "user/signup", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getUserList() {
    try {
        const response = await callGetApi({ url: "user/user_list"});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getUserProfile() {
    try {
        const response = await callGetApi({ url: "user/getprofile"});
        return response;
    } catch (error) {
        throw error;
    }
}

export async function userLogout() {
    try {
        const response = await callGetApi({ url: "user/signout"});
        return response;
    } catch (error) {
        throw error;
    }
}