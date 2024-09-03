import { CommonApi } from "./CommonApi";


const base_url = "https://server.mocs.in"


// Login
export const Login = async (data, header) => {

    return CommonApi("POST", `${base_url}/users/login/`, data, header)

}


// Register
export const Register = async (data, header) => {

    return CommonApi("POST", `${base_url}/users/register/`, data, header)

}


// Get All products
export const GetAllProducts = async () => {

    return CommonApi("GET", `${base_url}/products/`)

}

// Get Quanity
export const GetQuanity = async () => {

    return CommonApi("GET", `${base_url}/sizes`)

}


// Add to Cart
export const AddToCart = async (data, headers) => {

    console.log(data);
    console.log(headers);

    return CommonApi("POST", `${base_url}/cart_view/add_to_cart/`, data, headers)

}


// Get Cart
export const GetCart = async (headers) => {

    return CommonApi("GET", `${base_url}/cart_view/`, "", headers)

}


// Filter
export const GetFilter = async (categ, size) => {

    const params = new URLSearchParams({ category: categ, size: size });

    return CommonApi("GET", `${base_url}/filter/?${params.toString()}`, "", "")

}