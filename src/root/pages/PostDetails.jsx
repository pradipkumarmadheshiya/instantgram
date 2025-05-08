import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { formatDistanceToNowStrict } from 'date-fns'
import { Edit } from 'lucide-react'
import PostStats from '../../components/shared/PostStats'
import PostCard from '../../components/shared/PostCard'

const PostDetails = () => {

  const {id}=useParams()
  const {posts, userName}=useAppContext()

  let post= posts.filter((post)=>(
    post.id==id
  ))
  post=post[0]

  const timeAgo=formatDistanceToNowStrict(new Date(post.createdAt), {addSuffix:true})

  return (
    <div className='flex flex-col flex-1 gap-8 py-8 px-4 sm:p-12 items-center'>
      <PostCard post={post}/>
    </div>
  )
}

export default PostDetails
