import React from 'react'
import { useState } from 'react'
import './Auth.css'
import { Login, Register } from '../Services/AllApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'


function Auth() {



  // For Navigation
  const Navigate = useNavigate()


  // TO check Login and Register Status
  const [LoginStatus, setLoginStatus] = useState(true)

  

  // Login data
  const [LoginData, SetLoginData] = useState({

    username: "", password: "", email: "", password2: ""

  })



  //Login
  const handleLogin = async () => {


    try {


      const { username, password } = LoginData


      if (!username || !password) {


        alert("Empty Field")


      }
      else {


        const reqheader = {

          "Content-Type": "multipart/form-data"

        }


        const formdata = new FormData()

        formdata.append("username", username)
        formdata.append("password", password)


        const res = await Login(formdata, reqheader)


        if (res.status >= 200 && res.status <= 300) {


          toast.success("Login Success...!")

          console.log(res.data.token);
          

          sessionStorage.setItem("token",res.data.token)
          sessionStorage.setItem("user",username)


          setTimeout(() => {

            Navigate('/')

          },1000);


        }
        else {

          console.log(res);
          toast.warning("Invaild Username or Password")


        }


      }

    }
    catch (Err) {


      console.log(Err);


    }



  }




  // Register
  const handleRegister = async () => {


    try {


      const { username, password, password2, email } = LoginData


      if (!username || !password || !password2 || !email) {


        toast.warning("Empty Feild...!")


      }
      else {



        const reqheader = {

          "Content-Type": "multipart/form-data"

        }


        const formdata = new FormData()

        formdata.append("username", username)
        formdata.append("password", password)
        formdata.append("password_confirm", password2)
        formdata.append("email", email)


        const res = await Register(formdata, reqheader)


        if (res.status >= 200 && res.status <= 300) {


          toast.success("Registration Success..!")
          setLoginStatus(true)


        }
        else {

          console.log(res);
          toast.error(res.response.data.username || res.response.data.password || res.response.data.email || res.response.data.non_field_errors)


        }

      }


    }
    catch (Err) {


      console.log(Err);


    }



  }







  return (



    <>

      <section className='login'>

        <nav className='w-100 p-4 d-flex justify-content-between align-items-center'>

          <div className='login-logo'>

            <img src="/Mocs Logo.png" loading='lazy' className='img-fluid' alt="img" />

          </div>


          <div>

            <button className='btn btn-danger shadow-0 fw-bold'>Admin Login</button>

          </div>

        </nav>


        {/* Login */}
        <div className='w-100 d-flex justify-content-center align-items-center'>

          <div className='login-form row shadow border'>


            <div className='col-md-6 form-img'>

              <img src="https://static.vecteezy.com/system/resources/previews/006/912/004/non_2x/secure-login-and-sign-up-concept-illustration-vector.jpg" className='img-fluid' alt="" />

            </div>



            {

              LoginStatus ?


                <form onSubmit={(e) => { e.preventDefault() }} className='col-md-6 mt-2'>

                  <h1>Login</h1>

                  <input type="text" onChange={(e) => { SetLoginData({ ...LoginData, username: e.target.value }) }} className='form-control' placeholder='Enter your UserName' /> <br />

                  <input type="password" onChange={(e) => { SetLoginData({ ...LoginData, password: e.target.value }) }} className='form-control' placeholder='Enter Your Password' />

                  <button type='submit' className='btn-login w-100 mt-3' onClick={handleLogin}>Login</button>

                  <button className="google-login-btn mt-3 w-100">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" class="google-icon" />
                    Login with Google
                  </button>

                  <p className='text-center mt-3'>Don't have an account ? <a className='dont' onClick={() => { setLoginStatus(false) }}>Register</a></p>

                </form>


                :


                <form onSubmit={(e) => { e.preventDefault() }} className='col-md-6 mt-2'>

                  <h1>Sign Up</h1>

                  <input type="text" onChange={(e) => { SetLoginData({ ...LoginData, username: e.target.value }) }} className='form-control' placeholder='Enter your username' /> <br />

                  <input type="email" onChange={(e) => { SetLoginData({ ...LoginData, email: e.target.value }) }} className='form-control' placeholder='Enter your Email' /> <br />

                  <input type="password" onChange={(e) => { SetLoginData({ ...LoginData, password: e.target.value }) }} className='form-control' placeholder='Enter Your Password' />

                  <input type="password" onChange={(e) => { SetLoginData({ ...LoginData, password2: e.target.value }) }} className='form-control mt-3' placeholder=' Re-Enter Password' />

                  <button type='submit' className='btn-login w-100 mt-3' onClick={handleRegister} >Register</button>

                  <p className='text-center mt-3'>Already Registerd ? <a className='dont' onClick={() => { setLoginStatus(true) }}>Login</a></p>


                </form>


            }


          </div>


        </div>


      </section>




    </>





  )






}

export default Auth