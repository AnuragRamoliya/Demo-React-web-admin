import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
var user_token = cookies.get("user-token");
const API_URL =  process.env.REACT_APP_API_URL;


export async function callPostApi({ url, body, headers }) {
  let authHeader = cookies.get("user-token") ? { authorization: cookies.get("user-token") } : {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "POST",
      headers: { ...authHeader, ...headers },
      data: body,
      timeout: 120000,
    });
    return result;
  } catch (error) {
    // throw error;
    console.log(error);
    console.log("Post data", JSON.stringify(body));
    if (error && error.response) {
      return error.response;
    }
  }
}

export async function callGetApi({ url, body, headers }) {
  let authHeader = cookies.get("user-token") ? { authorization: cookies.get("user-token") } : {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "GET",
      headers: { ...authHeader, ...headers },
      data: body,
      timeout: 120000,
    });
    return result;
  } catch (error) {
    // throw error;
    console.log(error);
    console.log("Post data", JSON.stringify(body));
    if (error && error.response) {
      return error.response;
    }
  }
}

export async function callPutApi({ url, body, headers }) {
  let authHeader = cookies.get("user-token") ? { authorization: cookies.get("user-token") } : {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "PUT",
      headers: { ...authHeader, ...headers },
      data: body,
      timeout: 120000,
    });
    return result;
  } catch (error) {
    // throw error;
    console.log(error);
    console.log("Post data", JSON.stringify(body));
    if (error && error.response) {
      return error.response;
    }
  }
}

export async function callDeleteApi({ url, body, headers }) {
  let authHeader = cookies.get("user-token") ? { authorization: cookies.get("user-token") } : {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "DELETE",
      headers: { ...authHeader, ...headers },
      data: body,
      timeout: 120000,
    });
    return result;
  } catch (error) {
    // throw error;
    console.log(error);
    console.log("Post data", JSON.stringify(body));
    if (error && error.response) {
      return error.response;
    }
  }
}