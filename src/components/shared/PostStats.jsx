import React, { useState } from 'react'
import { Heart } from 'lucide-react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const PostStats = ({post}) => {
    
  const {save, setSave}=useAppContext()
  const [isLiked, setIsLiked]=useState(post.isLiked)
  const [isSaved, setIsSaved]=useState(post.isSaved)

  const handleSave=(e)=>{
    e.stopPropagation()
      if(!isSaved){
          setSave([...save, post])
          toast.success("Post Saved")
          setIsSaved(post.isSaved=true)
      }
      else{
          setSave(save.filter((item)=>(
              item.id!==post.id
          )))
          toast.error("Post Removed from saved")
          setIsSaved(post.isSaved=false)
      }
      console.log("saved post:", save)
  }

  return (
    <div className='flex justify-between items-center z-20'>
      <div className='flex gap-2 mr-4'>
        {
            isLiked ? 
            <img onClick={(e)=>{e.stopPropagation(); setIsLiked(false)}} 
            src='/assets/icons/heart.png' alt='heart'
            className='w-5 h-5 cursor-pointer'/>
            : 
            <Heart onClick={(e)=>{e.stopPropagation(); setIsLiked(true)}}
            className={`w-5 h-5 text-gray-700 cursor-pointer`}/>
        }
      </div>

      <div className='flex'>
        <img src="/assets/icons/saved.png" alt="save" 
        className={`w-4 h-4 cursor-pointer ${isSaved ? "opacity-100" : "opacity-60"}`}
        onClick={handleSave}/>
      </div>
    </div>
  )
}

export default PostStats
