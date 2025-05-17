import { Link } from "react-router-dom";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import PostStats from "../../components/shared/PostStats"

const GridPostList = () => {
    
    const {posts}=useAppContext()

  return (
    <ul className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-5xl">
      {posts.map((post) => (
        <li key={post.id} className="relative min-w-80 h-80">
          <div className="flex rounded-[24px] border border-dark-4 overflow-hidden w-full h-full">
            <img
              src={URL.createObjectURL(post.photo)}
              alt="post"
              className="h-full w-full object-cover"
            />
          </div>

          {/* <div className="absolute bottom-0 p-5 flex-between w-full bg-gradient-to-t from-dark-3 to-transparent rounded-b-[24px] gap-2">
            { (
              <div className="flex items-center justify-start gap-2 flex-1">
                <img
                  src={"/user.png"
                  }
                  alt="creator"
                  className="w-6 h-6 rounded-full"
                />
                <p className="">{post.creater}</p>
              </div>
            )}
            {<PostStats post={post}/>}
          </div> */}
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
