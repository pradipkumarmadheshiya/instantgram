import React from 'react'
import PostForm from '../../components/forms/PostForm'

const CreatePost = () => {
  return (
    <div className='flex flex-1'>
      <div className='flex flex-col flex-1 items-center gap-6 overflow-auto py-8 px-6 lg:p-14 custom-scrollbar'>
        <div className='max-w-5xl flex gap-2 justify-start items-center w-full'>
          <img src="/assets/icons/add-post.svg" alt="add-post" 
          className='bg-black rounded opacity-80'
          width={26} height={26}/>
          <h2 className='text-2xl text-left w-full'>Create Post</h2>
        </div>

        <PostForm/>
      </div>
    </div>
  )
}

export default CreatePost