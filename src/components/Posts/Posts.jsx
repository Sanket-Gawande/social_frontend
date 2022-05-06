import React from 'react'
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAsyncPost } from '../../Slices/postSlice'
const Posts = () => {
  const dispatch = useDispatch()
  const postsArray = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getAsyncPost())
  }, [])
  return (
    <>
      <div className="w-full md:px-8 grid grid-cols-1  justify-center lg:grid-cols-2 xl:grid-cols-3  gap-7  md:w-[60%] py-8 md:mx-0  mx-auto h-full overflow-y-auto">
        {postsArray.posts.map((obj, i) => {
          return <Post key={obj._id} post={obj} />
        })}
      </div>
    </>
  )
}

export default Posts
