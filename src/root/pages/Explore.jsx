import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import SearchResults from './SearchResults'
import GridPostList from './GridPostList'

const Explore = () => {

  const [searchValue, setSearchValue]=useState("")
  const {posts}=useAppContext()
  
  const showSearchResults=searchValue!==""

  return (
    <div className='flex flex-col flex-1 items-center  py-8 px-4 md:p-12 overflow-y-auto'>
      <div className='max-w-5xl flex flex-col items-center w-full gap-6 md:gap-8'>
        <h2 className='w-full text-lg'>Search Post</h2>
        <div className='flex gap-1 px-4 w-full rounded-lg bg-gray-100 items-center'>
          <Search className='w-5 h-5'/>
          <input type="text" name="search" placeholder='Search'
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
          className='h-10 border-none placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-0 w-full outline-none'/>
        </div>
      </div>

      <div className='flex flex-between w-full max-w-5xl mt-14 mb-6'>
        <h2 className='w-full text-lg'>Popular posts</h2>
        <div className='flex justify-center gap-3 bg-gray-50 rounded-xl px-4 py-2 cursor-pointer'>
          <p className='text-sm sm:text-base'>All</p>
          <img
            src="/assets/icons/filter.svg"
            width={16}
            height={16}
            alt="filter"
          />
        </div>
      </div>

      <div className='flex flex-wrap gap-8 w-full max-w-5xl'>
        {
          showSearchResults ? (
            <SearchResults/>
          )
          :
          <GridPostList />
        }
      </div>
    </div>
  )
}

export default Explore
