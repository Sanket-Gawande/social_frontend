import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLogin, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Slices/loginSlice'
import { screenSize } from '../Slices/miscSlice'
const header = ({ isLogin }) => {
  const token = useSelector((state) => state.user.token)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSmallScreen = useSelector((state) => state.misc.isSmallScreen)
  useEffect(() => {
    token ? navigate('/') : ''
  }, [token])
  return (
    <header className="shadow-md shadow-dark/10 bg-[white] fixed w-screen z-10">
      <div className="flex  relative  py-6 items-center px-8 md:px-12  justify-between">
        {/* logo section */}

        <section className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-18 h-10" />
          </Link>
        </section>
        <section className="border hidden md:flex items-center border-secondary/40 rounded-md  text-secondary">
          <input
            type="search"
            placeholder="search here..."
            className=" outline-none px-4 py-1"
          />
          <button className="bg-dark/20 px-4  h-full py-2 rounded-tr-md rounded-br-md">
            <AiOutlineSearch className="w-5 h-5 text-secondary" />
          </button>
        </section>
        <section className="">
          {!isLogin ? (
            <>
              <Link
                to="/signup"
                className="py-3 px-10 rounded-full  text-main text-sm  bg-secondary hidden md:inline-block"
              >
                Sign up <AiOutlineLogin className="inline w-5 h-5" />
              </Link>
              <span
                onClick={() => {
                  dispatch(screenSize(!isSmallScreen))
                  scrollTo(0, 0)
                }}
                className="md:hidden top-40 right-0 flex items-center shadow-md rounded-full cursor-pointer bg-secondary  py-2 px-8 rounded-bl-full text-main "
              >
                Login
              </span>
            </>
          ) : (
            <>
              <Link
                to="/account"
                className="py-3 px-10 rounded-full inline-block text-main text-sm  bg-secondary"
              >
                <AiOutlineUser className="inline w-5 h-5" />
              </Link>
            </>
          )}
        </section>
      </div>
    </header>
  )
}

export default header
