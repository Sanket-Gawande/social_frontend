import React from 'react'

const Post = ({post}) => {

  return (
    
    <div className="bg-[white] w-[90%] max-w-[400px] max-h-[500px]  md:w-auto mx-auto  p-4 min-w-[280px] relative shadow-md shadow-secondary/10">
      {/* post author */}
      <div className="flex items-center ">
        <img
          src="/user.png"
          alt="user"
          className="w-8 h-8 bg-secondary/20 rounded-full mr-4 object-cover"
        />
        <h5 className="text-sm font-bold text-secondary/90">Sanket Gawande</h5>
      </div>
      {/* posted image div */}
      <div>
        <h4 className="my-2 font-medium text-sm ">
          {post?.title?.substring(0, 40) + '...'}
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
