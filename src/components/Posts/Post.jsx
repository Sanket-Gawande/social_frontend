import React from 'react'

const Post = ({post}) => {

  return (
    
    <div className="bg-[white] w-[90%] max-w-[400px] lg:max-h-[400px]  md:w-auto mx-auto  p-4 min-w-[280px] relative shadow-md shadow-secondary/10">
      {/* post author */}
      <div className="flex items-center ">
        <img
        loading='lazy'
          src={post.user_profile}
          alt="user"
          className="w-10 h-10 bg-secondary/20 rounded-full mr-4 object-cover"
        />
        <h5 className="text-md font-semibold text-secondary/90">{post.username}</h5>
      </div>
      {/* posted image div */}
      <div>
        <h4 className="my-2 font-medium text-sm ">
          { post?.title?.length > 40 ?  post?.title?.substring(0, 40) + '...' : post?.title }
        </h4>
        <img
          src={import.meta.env.VITE_SERVER + post.thumbnail}
          alt="post"
          className="w-full aspect-square my-4  bg-main/20 object-cover"
        />
      </div>
      {/* post date time */}
      <span className="text-sm  text-secondary/60  block text-right">
        { new Date(post.createdAt).toLocaleString('en-US', { dateStyle: 'full' })}
      </span>
    </div>
  )
}

export default Post
