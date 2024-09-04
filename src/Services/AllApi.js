import { CommonApi } from "./CommonApi";


const base_url = "https://server.mocs.in"


// Login
export const Login = async (data, header) => {

    return CommonApi("POST", `${base_url}/api/token/`, data, header)

}


// Register
export const Register = async (data, header) => {

    return CommonApi("POST", `${base_url}/api/register/`, data, header)

}

// Google Auth
export const GoogleAuth = async (data,header) => {

    return CommonApi("POST", `${base_url}/auth/registration/`, data,header)

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

    console.log(data)
    console.log(headers)

    return CommonApi("POST", `${base_url}/user_cart/`, data, headers)

}

// Delete Cart Items
export const DeleteCart = async (data) => {

    const params = new URLSearchParams({id:data})

    return CommonApi("DELETE", `${base_url}/cart_view/?${params.toString()}`,"","")

}


// Get Cart
export const GetCart = async (data) => {

    const params = new URLSearchParams({user:data});

    return CommonApi("GET", `${base_url}/cart_view/?${params.toString()}`, "", "")

}


// Filter
export const GetFilter = async (categ, size) => {

    const params = new URLSearchParams({ category: categ, size: size });

    return CommonApi("GET", `${base_url}/filter/?${params.toString()}`, "", "")

}