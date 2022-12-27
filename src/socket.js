const { io } = require("socket.io-client");
const API_URL =  "http://localhost:5000/";

let socket  = io(API_URL);
export default socket;