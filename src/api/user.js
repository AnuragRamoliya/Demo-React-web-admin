import { callPostApi, callDeleteApi, callPutApi, callGetApi } from "./api";

export async function userLogin(data) {
    try {
        const response = await callPostApi({ url: "user/signin", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}