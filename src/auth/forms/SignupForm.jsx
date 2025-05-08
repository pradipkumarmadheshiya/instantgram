import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import Loader from "../../components/shared/Loader";
import { useAppContext } from "../../context/AppContext";

const SignupForm = () => {

  const { setUserLogged}=useAppContext()
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate=useNavigate()
  const [isLoading, setIsLoading]=useState(false)
  const {setUserName}= useAppContext()

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setTimeout(()=>{
      console.log("Form submitted", form);
      setUserName(form.name)
      setForm({ name:"", email: "", password: "" });
      setIsLoading(false)
      setUserLogged(true)
      navigate("/")
    },1000)
  };

  return ( 
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-fit shadow-2xl p-6 sm:p-12 rounded-xl">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="logo" className="w-4 h-4 rounded" />
          <h1>Instantgram</h1>
        </div>
        <p className="text-gray-600 text-center mb-4">
          To use Instantgram, please enter your details</p>
        <h1 className="text-2xl text-center">
          User <span className="text-primary">Sign Up</span>
        </h1>
        <form onSubmit={handleOnSubmit} className="mt-4 flex flex-col gap-3">
          <div>
            <p>Name</p>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              minLength={2}
              required
              value={form.name}
              onChange={handleOnChange}
              className="outline-none bg-gray-100 p-2 rounded w-full"
            />
          </div>

          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleOnChange}
              className="outline-none bg-gray-100 p-2 rounded w-full"
            />
          </div>

          <div>
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              minLength={4}
              required
              value={form.password}
              onChange={handleOnChange}
              className="outline-none bg-gray-100 p-2 rounded w-full"
            />
          </div>

          <Link to={"/sign-in"} className="mt-4">
            Already have an account{" "}
            <span className="text-primary hover:underline">Click here</span>
          </Link>

          <button
            type="submit"
            className=" bg-primary text-white px-4 py-1 rounded cursor-pointer hover:bg-primary-dull"
          >
            {isLoading ? 
            (<div className="flex justify-center items-center gap-2"><Loader/> Loading...</div>) : 
            "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
