import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
});

export const signIn = (userObject) => API.post("/app/user/signin", userObject);

export const signUp = (userObject) => API.post("/app/user/signup", userObject);