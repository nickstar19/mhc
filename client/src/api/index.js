import axios from "axios";


const API = axios.create({ baseURL: "" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = JSON.parse(
      localStorage.getItem("profile")
    ).token;
  }
  return req;
});

export const signin = (formData) => API.post("suser/userLogin", formData);
export const signup = (formData) => API.post("suser/createNewUser", formData);
export const verify = () => API.get("/user/verify");

export const getcolleges = (formData) =>
  API.post("suser/getcolleges", formData);

export const clglist = (formData) =>
  API.post("suser/getcoursedetail", formData);

export const viewHistory = (formData) =>
  API.post("suser/viewhistory", formData);

export const profile = () => API.get("suser/getuserhistory");
