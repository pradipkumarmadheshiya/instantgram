import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import Loader from "../../components/shared/Loader";
import { useAppContext } from "../../context/AppContext";

const SigninForm = () => {

  const { setUserLogged}= useAppContext()
  const navigate= useNavigate()
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading]=useState(false)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setTimeout(()=>{
      console.log("Form submitted", form);
      setForm({ email: "", password: "" });
      setIsLoading(false)
      setUserLogged(true)
      navigate("/")
    },2000)
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-fit shadow-2xl p-6 sm:p-12 rounded-xl">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="logo" className="w-4 h-4 rounded" />
          <h1>Instantgram</h1>
        </div>
        <p className="text-gray-600 text-center mb-8">
          To use Instantgram, please enter your details</p>
        <h1 className="text-2xl text-center">
          User <span className="text-primary">Login</span>
        </h1>
        <form onSubmit={handleOnSubmit} className="mt-4 flex flex-col gap-3">
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
              required
              value={form.password}
              onChange={handleOnChange}
              className="outline-none bg-gray-100 p-2 rounded w-full"
            />
          </div>

          <Link to={"/sign-up"} className="mt-4">
            Create an account{" "}
            <span className="text-primary hover:underline">Click here</span>
          </Link>

          <button
            type="submit"
            className=" bg-primary text-white px-4 py-1 rounded cursor-pointer hover:bg-primary-dull"
          >
            {isLoading ? 
            (<div className="flex justify-center items-center gap-2"><Loader/> Loading...</div>) : 
            "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
