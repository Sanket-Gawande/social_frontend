import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../Slices/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaCheckCircle, FaTimes, FaTimesCircle } from 'react-icons/fa'

const AddPost = ({ state }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signupMessage, setSignupMessage] = useState(null)
  // states related to local username check
  const [username, setUsername] = useState({})

  // handler to check username is available or not !
  const checkusername = async (e) => {
    const req = await fetch(
      `${import.meta.env.VITE_SERVER}api/user/username/${e.target.value}`,
    )
    const res = await req.json()
    setUsername(res)
  }

  // screen size ui
  const classs = state ? '' : 'hidden'

  // user signup function
  const handleSignup = async (e) => {
    e.preventDefault()
    if (!username.avail) return
    const formdata = new FormData(e.target)
    const rawData = await fetch(
      `${import.meta.env.VITE_SERVER}api/user/signup`,
      {
        method: 'post',
        body: formdata,
      },
    )
    const response = await rawData.json()
    if (response.status == 'error') {
      setSignupMessage(response.message)
      return
    }

    dispatch(signup({ profile: response.user }))
    navigate('/')
  }
  const small = useSelector((state) => state.misc.isSmallScreen)

  return (
    <>
      <div
        className={` ${
          small ? '' : 'hidden'
        }  md:block py-8 lg:py-12 lg:px-12 md:min-w-[400px] max-w-[450px] md:mr-8 lg:mr-16 w-[90%] md:w-[40%] mx-auto order-2`}
      >
        {/* add post section */}
        <section className="w-[100%] md:w-full mx-auto  px-8 py-4 shadow-md shadow-secondary/20 bg-[white]">
          <h4 className="text-xl font-semibold  my-4 text-secondary ">
            Create an account.
          </h4>
          {signupMessage && (
            <h4 className="border-b-2 flex justify-between items-center border-red-500 bg-rose-100 text-rose-500  px-4 py-2 rounded-sm my-4 text-md text-semibold">
              <span>
                <FaTimesCircle className="inline-block mr-2 " color="red" />{' '}
                {signupMessage}
              </span>
              <span className="" onClick={() => setSignupMessage(null)}>
                <FaTimes className="cursor-pointer" />
              </span>
            </h4>
          )}
          <div className="">
            <img
              src="user.png"
              alt="user"
              className="w-[50%] aspect-square rounded-full object-cover mx-auto my-4 border border-main"
            />
            <form onSubmit={handleSignup} method="post">
              <input
                type="text"
                name="username"
                onBlur={checkusername}
                // matches username pattern { eg. sanket.g , sanket_g , sanket@g etc }
                // no capital alphabets
                // "."  "_"  "@"  only this characters are available

                pattern="[a-z]+[_\,.\,@\]*[a-z]*"
                placeholder="username"
                className="input w-full border  outline-none border-secondary/40 rounded-md py-1 px-4 text-secondary "
              />
              {username.state && (
                <span
                  className={`py-4 flex items-center ${
                    username.avail ? 'text-green-500' : 'text-[tomato]'
                  }`}
                >
                  {username.avail ? (
                    <FaCheckCircle className="mx-2" />
                  ) : (
                    <FaTimesCircle className="mx-2" />
                  )}
                  {username.message}
                </span>
              )}
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="input w-full border  outline-none border-secondary/40 rounded-md  my-4 py-1 px-4 text-secondary "
              />
              <input
                type="email"
                name="email"
                placeholder="Email "
                className="input w-full border  outline-none border-secondary/40 rounded-md py-1 px-4 text-secondary "
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input w-full border  my-4 outline-none border-secondary/40 rounded-md py-1 px-4 text-secondary "
              />
              <button
                className={`bg-secondary ${
                  !username.avail ? 'bg-secondary/80' : ''
                } text-main py-1 px-6 rounded-md`}
                disabled={!username.avail}
              >
                Signup
              </button>
              <p className="font-anek  my-2 text-secondary/90">
                Don't have an account ,
                <Link to="/" className="text-main font-semibold mx-1">
                  Login
                </Link>
                here .
              </p>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default AddPost
