import React from 'react'
import { useAppContext } from '../../context/AppContext'
import PostCard from '../../components/shared/PostCard'

const Home = () => {

  const {posts}=useAppContext()

  return (
    <div className='flex flex-1'>
      <div className='flex flex-col flex-1 items-center gap-8 overflow-scroll p-4 md:px-6 lg:p-6 custom-scrollbar'>
        <div className='max-w-screen-sm flex flex-col items-center w-full gap-6 sm:gap-8'>
          <h2 className='text-xl sm:text-2xl text-left w-full'>Home Feed</h2>

          {
            posts.length==0 ? 
            <p className='bg-gray-50 px-8 py-4 rounded'>No posts yet. Please create one to get started.</p> 
            :
            <div className='flex flex-col gap-4 w-full'>
              {posts.map((post, index)=>(
                <PostCard key={index} post={post}/>
              ))}
            </div>
          }
          
        </div>
      </div>      
    </div>
  )
}

export default Home
