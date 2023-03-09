import axios from "axios";

import baseURL from "../constants/baseURL";


export const axiosService = axios.create({
    baseURL: baseURL
});