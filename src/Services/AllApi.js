import { CommonApi } from "./CommonApi";


const base_url = "https://server.mocs.in"


// Login
export const Login = async (data,header) => {

    return CommonApi("POST", `${base_url}/users/login/`,data,header)

}


// Register
export const Register = async (data,header) => {

    return CommonApi("POST", `${base_url}/users/register/`,data,header)

}


// Get All products
export const GetAllProducts = async () => {

    return CommonApi("GET", `${base_url}/products/`)

}

// Get Quanity
export const GetQuanity = async () => {

    return CommonApi("GET", `${base_url}/sizes`)

}