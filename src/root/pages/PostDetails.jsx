import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { formatDistanceToNowStrict } from 'date-fns'
import PostCard from '../../components/shared/PostCard'

const PostDetails = () => {

  const {id}=useParams()
  const {posts, userName}=useAppContext()

  let post= posts.filter((post)=>(
    post.id==id
  ))

  if (post.length===0) return <p className='text-primary text-center w-full mt-16'>Post not found</p>

  return (
    <div className='flex flex-col flex-1 gap-8 py-8 px-4 sm:p-12 items-center'>
      <PostCard post={post}/>
    </div>
  )
}

export default PostDetails
