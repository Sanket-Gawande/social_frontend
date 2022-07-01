import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes, FaTimesCircle } from 'react-icons/fa'
import { login } from '../Slices/loginSlice'

const Login = () => {
  const [loginMesage, setLoginMessage] = useState(null)
  const user = useSelector((state) => state.user)
const dispatch = useDispatch()
  // google login on success
  const GoogleLoginSuccess = (data) => {
    console.log({ data })
  }

  //go0gle login on failure
  const GoogleLoginFailure = (error) => {
    console.log({ error })
  }
  const small = useSelector((state) => state.misc.isSmallScreen)

  const loginFunction = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    fetch(`${import.meta.env.VITE_SERVER_API}/user/login`, {
      method: 'post',
      body: data,
      headers: {},
    })
      .then((raw) => raw.json())
      .then(
        (
          data, //something with data
        ) => {
          if (data.status == 'error') {
            setLoginMessage(data.message)
            return 
          }
          
          dispatch(login({ profile : data}));
        },
      )
  }
  return (
    <>
      <div
        className={` ${
          small ? '' : 'hidden'
        }  md:block py-8 lg:py-12 lg:px-12 md:min-w-[400px] max-w-[450px] md:mr-8 lg:mr-16  w-[90%] md:w-[40%] mx-auto order-2`}
      >
        {/* add post section */}
        <section className="w-[100%] md:w-full mx-auto  px-8 py-4 shadow-md shadow-secondary/20 bg-[white]">
          {loginMesage && (
            <h4 className="border-b-2 flex justify-between items-center border-red-500 bg-rose-100 text-rose-500  px-4 py-2 rounded-sm my-4 text-md text-semibold">
              <span><FaTimesCircle className='inline-block mr-2 ' color='red'/> {loginMesage}</span>
              <span
                className=""
                onClick={() => setLoginMessage(null)}
              >
                <FaTimes  className='cursor-pointer'/>
              </span>
            </h4>
          )}
          <h4 className="text-xl font-semibold  my-4 text-secondary ">
            Login here !
          </h4>
          <div className="">
            <img
              src="user.png"
              alt="user"
              className="w-[50%] aspect-square rounded-full object-cover mx-auto my-4 border border-main"
            />
            <form onSubmit={loginFunction}>
              <input
                required
                type="text"
                name="username"
                placeholder="username"
                className="input w-full border  outline-none border-secondary/40 rounded-md py-1 px-4 text-secondary "
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                className="input w-full border  my-4 outline-none border-secondary/40 rounded-md py-1 px-4 text-secondary "
              />
              <button className="bg-secondary text-main py-1 px-6 rounded-md">
                {' '}
                Login{' '}
              </button>
              <p className="font-anek my-2 text-secondary/90">
                Don't have an account ,
                <Link to="/signup" className="text-main font-semibold mx-1">
                  Sign up
                </Link>
                here .
              </p>
              <GoogleLogin
                clientId={import.meta.env.VITE_GOOGLE_API}
                onSuccess={GoogleLoginSuccess}
                onFailure={GoogleLoginFailure}
                render={(props) => (
                  <button
                    disabled={props.disabled}
                    onClick={props.onClick}
                    className="bg-[white] text-secondary"
                  >
                    Login with google
                  </button>
                )}
              />
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login
