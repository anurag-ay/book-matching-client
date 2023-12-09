import axios from "axios";

export const BASE_URL = "https://book-matching-server.vercel.app";

// Intilializing Axios with Base Url
export default axios.create({
  baseURL: BASE_URL,
});

// Student  Routes
export const studentRegisterRoute = "/api/student";
export const studentLoginRoute = "/api/student/login";

// bookRoute

// recommend
export const recommendBookRoute = "/api/recommend";

// decodeToken
export const decodeTokenRoute = "/api/decodeToken";
