import React, { useRef, useState } from 'react'
import { FaFileUpload, FaFileImage } from 'react-icons/fa'
import { createPost, getAllPosts, createAsyncPost } from '../Slices/postSlice'
import { useDispatch, useSelector } from 'react-redux'

const AddPost = () => {
  const small = useSelector((state) => state.misc.isSmallScreen)
  const dispatch = useDispatch()
  const imageRef = useRef()

  const [formData, setFormdata] = useState({
    title: '',
    message: '',
    creator: '',
    file: '',
    tags: '',
  })
  const fileUpload = async (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormdata({ ...formData, file })
      imageRef.current.src = reader.result
    }
  }
  const submitPost = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    dispatch(createAsyncPost(form))
    // e.target.reset()

    imageRef.current.src = ' /uploading.gif'
  }
  return (
    <>
      <div
        className={` ${
          small ? '' : 'hidden'
        }  md:block py-8 lg:py-12 lg:px-12 md:min-w-[400px]   max-w-[450px] md:mr-8 lg:mr-16 h-full md:w-[40%] mx-auto  order-2`}
      >
        {/* add post section */}
        <section className="w-[90%] md:w-full mx-auto  px-8 py-4 shadow-md shadow-secondary/20 bg-[white]">
          <h4 className="text-xl font-semibold  my-4 text-secondary ">
            Add post !
          </h4>
          <form onSubmit={submitPost}>
            <div className="">
              <input
                type="text"
                placeholder="post title..."
                name="title"
                onChange={(e) => {
                  setFormdata({ ...formData, title: e.target.value })
                }}
                value={formData.title}
                className="input w-full border  outline-none border-secondary/40 rounded-md py-1 px-4 text-secondary font-semibold"
              />
              <input
                type="text"
                value={formData.tags}
                name="tags"
                placeholder="add tags eg. nature,tech"
                onChange={(e) => {
                  setFormdata({ ...formData, tags: e.target.value })
                }}
                className="input w-full border  my-2  outline-none border-secondary/40 rounded-md py-1 px-4 text-secondary font-semibold"
              />
              <label htmlFor="postThumbnail" className="relative group block ">
                <img
                  src="/uploading.gif"
                  ref={imageRef}
                  alt="preview"
                  className="w-full aspect-square rounded-md object-cover my-4 border border-main"
                />
                <div className="absolute inset-0 hidden  bg-[white]/50 rounded-md backdrop-filter transition  backdrop-blur-md  group-hover:grid place-items-center text-[white]">
                  <FaFileImage className="text-[black]/40 w-20 h-20 opacity-50" />
                </div>
                <input
                  type="file"
                  name="thumbnail"
                  id="postThumbnail"
                  className="hidden"
                  onChange={fileUpload}
                />
              </label>
              <textarea
                name="description"
                value={formData.message}
                id=""
                rows="2"
                onChange={(e) => {
                  setFormdata({ ...formData, message: e.target.value })
                }}
                className="border border-secondary/40 w-full  outline-none rounded-md px-2 py-1 "
              ></textarea>

              <button
                type="submit"
                className="py-2 px-4 rounded-md bg-secondary text-main my-4"
              >
                {' '}
                Post now !
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default AddPost
