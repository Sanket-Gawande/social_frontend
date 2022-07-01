import React from 'react'
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAsyncPost } from '../../Slices/postSlice'
export const Posts = () => {
  const dispatch = useDispatch()
  const postsArray = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getAsyncPost())
  }, [])

  
  return (
    <>
    {
      postsArray.posts.length > 0 ? 
    
      <div className="w-full md:px-8 grid grid-cols-1  justify-center lg:grid-cols-2 xl:grid-cols-3  gap-7  md:w-[60%] py-8 md:mx-0  mx-auto h-full overflow-y-auto">
        {postsArray.posts.map((obj, i) => {
          return <Post key={obj._id} post={obj} />
        })}
      </div>
       : 
       <div className="w-full md:px-8  justify-center grid place-items-center  select-none  md:w-[60%] py-8 md:mx-0  mx-auto h-full overflow-y-auto">
        <h4 className='text-slate-400/80 text-4xl font-bold'>
          No posts available , be the first one to post.
        </h4>
       </div>
      }
    </>
  )
}


