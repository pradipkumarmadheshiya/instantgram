import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [userName, setUserName] = useState(() => {
    const user = localStorage.getItem("userName");
    return user === "null" ? "Anonymous" : user;
  });
  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  const [userLogged, setUserLogged] = useState(() => {
    const login = localStorage.getItem("userLogged");
    return login === "true" ? true : false;
  });
  useEffect(() => {
    localStorage.setItem("userLogged", userLogged);
  }, [userLogged]);

  const [chosenFile, setChosenFile] = useState("");
  const [postForm, setPostForm] = useState({
    caption: "",
    photo: null,
    location: "",
    tags: "",
  });

  const [posts, setPosts] = useState(()=>{
    return JSON.parse(localStorage.getItem("localPost")) || []
  });
  useEffect(()=>{
    localStorage.setItem("localPost", JSON.stringify(posts)); 
  },[posts])

  const [save, setSave] = useState([]);

  const [allUsers, setAllUsers]=useState(()=>{
    return JSON.parse(localStorage.getItem("allUsers")) || []
  })
  useEffect(()=>{
    localStorage.setItem("allUsers", JSON.stringify(allUsers))
  },[allUsers])

  const value = {
    userLogged,
    setUserLogged,
    userName,
    setUserName,
    chosenFile,
    setChosenFile,
    postForm,
    setPostForm,
    posts,
    setPosts,
    save,
    setSave,
    allUsers,
    setAllUsers
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
