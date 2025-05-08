import React from 'react'
import FileUploader from '../shared/FileUploader'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const PostForm = () => {

  const {postForm, setPostForm, posts, setPosts, userName}=useAppContext()
  const navigate=useNavigate()

  const handleOnChange=(e)=>{
    const {name, value}=e.target
    setPostForm({...postForm, [name]:value })
    console.log(postForm);
  }

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
  
    if (!postForm.photo) {
      toast("Please! Upload a photo at least");
      return;
    }
  
    const base64Photo = await fileToBase64(postForm.photo);
  
    const newPost = {
      ...postForm,
      photo: base64Photo, // convert photo to Base64
      creater: userName,
      createdAt: new Date().toLocaleDateString(),
      id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
      isLiked: false,
      isSaved: false,
    };
  
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    toast.success("Posted Successfully");
  
    setPostForm({
      caption: "",
      photo: null,
      location: "",
      tags: "",
    });
  
    navigate("/");
  };

  const handleOnCancel=()=>{
    setPostForm({
      caption: "",
        photo: null,
        location: "",
        tags: ""
    })
  }

  return (
    <div className='w-full'>
      <div className=''>
        <p>Caption</p>
        <textarea 
          onChange={handleOnChange}
          value={postForm.caption}
          name='caption'
          className="w-full mt-1 h-22 p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-50"
          placeholder="Write here..."
        ></textarea>
      </div>

      <div className='mt-4'>
        <p>Add Photo</p>
        <div className='w-full mt-1 py-4 border border-gray-300 rounded-lg flex flex-col justify-center items-center bg-gray-50'>
          <img src="/assets/icons/file-upload.svg" alt="file upload" 
          className='w-16 h-16'/>
          
          <FileUploader/>
        </div>
      </div>

      <div className='mt-6'>
        <p>Add Location</p>
        <input onChange={handleOnChange} value={postForm.location}
        type="text" name="location" placeholder='City' 
        className='mt-1 border border-gray-300 w-full px-2 py-1 rounded outline-none bg-gray-50'/>
      </div>

      <div className='mt-6'>
        <p>Add Tags</p>
        <input onChange={handleOnChange} value={postForm.tags}
        type="text" name="tags" placeholder='Art Expression Learn' 
        className='mt-1 border border-gray-300 w-full px-2 py-1 rounded outline-none bg-gray-50'/>
      </div>

      <div className='mt-6 flex justify-end gap-4'>
        <button onClick={handleOnCancel}
        type='button'
          className='bg-gray-200 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer text-sm'>
          Cancel</button>
        <button type='button' onClick={handleOnSubmit}
          className='bg-primary text-white px-4 py-2 rounded hover:bg-primary-dull cursor-pointer text-sm'>
          Submit</button>
      </div>
    </div>
  )
}

export default PostForm