import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import AddPost from './AddPost'

import Login from './Login'
import Posts from './Posts/Posts'
import { useDispatch, useSelector } from 'react-redux'
import { addCakes, orderCakes } from '../Slices/cakeSlice'
import { getAsyncPost } from '../Slices/postSlice'
import { screenSize } from '../Slices/miscSlice'

const Home = ({ isLogin }) => {
  console.log({isLogin})
  const Size = useSelector((state) => state.misc.isSmallScreen)
  console.log({ Size })
  const dispatch = useDispatch()
  return (
    <div className="font-anek bg-[gray]/5 h-screen pt-24">
      {/* body of the Home */}
      <section className="h-full w-full  md:flex justify-between relative">
        <Outlet />
        <Posts />
        {isLogin ? (
          <span
            onClick={() => {
              dispatch(screenSize(!Size));
              scrollTo(0, 0);
            }}
            className="md:hidden fixed top-40 right-0 flex items-center   shadow-md rounded-tl-full cursor-pointer bg-secondary  py-2 px-8 rounded-bl-full text-main "
          >
            Add post
          </span>
        ) : (
          <span
            onClick={() => {
              dispatch(screenSize(!Size));
              scrollTo(0, 0);
            }}
            className="md:hidden fixed top-40 right-0 flex items-center shadow-md rounded-tl-full cursor-pointer bg-secondary  py-2 px-8 rounded-bl-full text-main "
          >
            Login !
          </span>
        )}
      </section>
    </div>
  )
}

export default Home
