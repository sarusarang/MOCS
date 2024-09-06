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
export const GoogleAuth = async (data, header) => {

    return CommonApi("POST", `${base_url}/api/google-auth/`, data, header)

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

    return CommonApi("POST", `${base_url}/user_cart/`, data, headers)

}


// Add to Color
export const GetColor = async () => {

    return CommonApi("GET", `${base_url}/colors/`, "","")

}



// Delete Cart Items
export const DeleteCart = async (data, user) => {

    const params = new URLSearchParams({ id: data, user: user })

    return CommonApi("DELETE", `${base_url}/cart_view/?${params.toString()}`, "", "")

}


// Get Cart
export const GetCart = async (data) => {

    const params = new URLSearchParams({ user: data });

    return CommonApi("GET", `${base_url}/cart_view/?${params.toString()}`, "", "")

}


// Filter
export const GetFilter = async (categ, size) => {

    const params = new URLSearchParams({ category: categ, size: size });

    return CommonApi("GET", `${base_url}/filter/?${params.toString()}`, "", "")

}



// Add to Address
export const PostAddress = async (data, headers) => {

    return CommonApi("POST", `${base_url}/user_address/`, data, headers)

}


// Get to Address
export const GetAddress = async (data) => {

    const params = new URLSearchParams({ user: data });

    return CommonApi("GET", `${base_url}/user_address/?${params.toString()}`, "", "")

}