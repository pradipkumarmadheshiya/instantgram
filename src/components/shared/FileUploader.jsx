import React from 'react'
import { useAppContext } from '../../context/AppContext'

const FileUploader = () => {

    const {postForm, setPostForm}=useAppContext()
  
    const handleFileUpload=(e)=>{
      const file=e.target.files[0]
      if (file){
        setPostForm((prev)=>({
          ...prev, photo:file
        }))
      }
    }

  return (
    <form className="p-4 flex flex-col justify-center items-center">
      <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="file_input">
        Upload Image (JPG, PNG, SVG)
      </label>

      <input 
        onChange={handleFileUpload}
        type="file" 
        name='photo'
        accept="image/*"
        className="text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 py-1 px-2 w-45"
      />
    </form>
  )
}

export default FileUploader
