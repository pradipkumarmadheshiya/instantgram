import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import {formatDistanceToNowStrict} from "date-fns"
import PostStats from './PostStats'
import { Edit,} from 'lucide-react'

const PostCard = ({post}) => {
    
    const {caption, photo, location, tags, createdAt}=post
    const {userName}=useAppContext()
    const timeAgo=formatDistanceToNowStrict(new Date(createdAt), {addSuffix:true})

  return (
    <div className='bg-gray-50 rounded-2xl border border-gray-200 p-4 lg:p-6 w-full max-w-screen-sm'>
        <div className='flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Link to={`/all-users`}>
                    <img src="/user.png" alt="creater" 
                    className='w-6 h-6'/>
                    </Link>

                    <div className='flex flex-col'>
                        <p className=''>{post.creater}</p>
                        <div className='flex gap-1 text-gray-600 items-center'>
                            <p className='text-sm'>{timeAgo}</p>
                            -
                            <p className='text-sm'>{location}</p>
                        </div>
                    </div>
                </div>

                {userName == post.creater && (
                <Link to={`/update-post/${post.id}`}>
                    <Edit className="w-4 h-4" />
                </Link>
                )}
            </div>

            <img src={URL.createObjectURL(photo)} alt="post image" 
                className='h-80 lg:h-110 w-full rounded-[16px] object-cover my-4'/>
            <PostStats post={post}/>
            <div className='text-sm font-medium leading-[140%] mt-2'>
                <p>{caption}</p>
                <ul className='flex gap-1 mt-2'>
                    {
                        tags.split(" ").map((tag)=>(
                            <li key={tag} className='text-gray-600'>
                                #{tag}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PostCard