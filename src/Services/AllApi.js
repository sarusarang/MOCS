import { CommonApi } from "./CommonApi";


const base_url = ""




// Login
export const Login = async (data,header) => {

    return CommonApi("POST", `${base_url}`,data,header)

}


// Register
export const Register = async (data,header) => {

    return CommonApi("POST", `${base_url}`,data,header)

}


// Get All products
export const GetAllProducts = async () => {

    return CommonApi("GET", `${base_url}/products/`)

}