import React from 'react'
import { Link } from 'react-router-dom'

const AddPost = ({ state }) => {
  const classs = state ? '' : 'hidden'
  return (
    <>
      <div
        className={` ${classs}  md:block py-8 lg:py-12 lg:px-12 md:min-w-[400px] max-w-[450px] md:mr-8 lg:mr-16 h-full w-[90%] md:w-[40%] mx-auto order-2`}
      >
        {/* add post section */}
        <section className="w-[90%] md:w-full mx-auto  px-8 py-4 shadow-md shadow-secondary/20 bg-[white]">
          <h4 className="text-xl font-semibold  my-4 text-secondary ">
            Create an account.
          </h4>
          <div className="">
            <img
              src="user.png"
              alt="user"
              className="w-[50%] aspect-square rounded-full object-cover mx-auto my-4 border border-main"
            />
            <form method="post">
              <input
                type="text"
                name="name"

                placeholder="Full name"
                className="input w-full border  outline-none border-secondary/40 rounded-md  my-4 py-1 px-4 text-secondary "
              />
              <input
                type="text"
                name="username"
                placeholder="username"
                className="input w-full border  outline-none border-secondary/40 rounded-md py-1 px-4 text-secondary "
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input w-full border  my-4 outline-none border-secondary/40 rounded-md py-1 px-4 text-secondary "
              />
              <button className="bg-secondary text-main py-1 px-6 rounded-md">
                {' '}
                Login{' '}
              </button>
              <p className='font-anek  my-2 text-secondary/90'>Don't have an account ,  
                <Link to="/" className='text-main font-semibold mx-1'>
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
