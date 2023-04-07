import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
var user_token = cookies.get("user-token");
const API_URL =  "http://localhost:5000/";


export async function callPostApi({ url, body, headers }) {
  let authHeader = user_token ? { authorization: cookies.get("user-token") } : {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "POST",
      data: body,
      headers: { ...authHeader, ...headers },
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
  console.log(user_token)
  let authHeader = user_token ? { authorization: cookies.get("user-token") } : {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "GET",
      data: body,
      timeout: 120000,
      headers: { ...authHeader, ...headers },
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
  let authHeader = user_token ? { authorization: cookies.get("user-token") } : {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "PUT",
      data: body,
      timeout: 120000,
      headers: { ...authHeader, ...headers },
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
  let authHeader = user_token ? { authorization: cookies.get("user-token") } : {};
  try {
    const result = await axios({
      url: API_URL + url,
      method: "DELETE",
      data: body,
      timeout: 120000,
      headers: { ...authHeader, ...headers },
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