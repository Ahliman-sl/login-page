import { MdOutlineMail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

// Import axios
import axios from "axios";
import { useState } from "react";
const BASIC_URL = "http://localhost:3005";

export default function LoginForm({ toggleForm, setSucsess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await axios.get(`${BASIC_URL}/users`);
      const data = await response.data;
      const users = data;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setSucsess(true);
      } else {
        setSucsess(false);
      }
      console.log(data);
    } catch (error) {
      console.error("Something went wrong", error);
    }
  }

  return (
    <form className="w-full h-full flex flex-col items-center justify-center">
      <div className="relative border-2 rounded-md p-1 border-sky-400 flex items-center justify-center">
        <MdOutlineMail className="text-4xl pl-3 " />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-max md:w-80 md:h-10 pl-4 outline-none rounded-md"
        />
        <div
          className="absolute top-0 left-4 bg-stone-50 px-2 text-sm text-sky-400 font-semibold"
          style={{ position: "absolute", top: "-15px" }}
        >
          Email
        </div>
      </div>
      <div className="relative border-2 rounded-md p-1 border-sky-400 flex items-center justify-center mt-10">
        <BiSolidLock className="text-4xl pl-3 " />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-max md:w-80 md:h-10 pl-4 outline-none rounded-md"
        />
        <div
          className="absolute top-0 left-4 bg-stone-50 px-2 text-sm text-sky-400 font-semibold"
          style={{ position: "absolute", top: "-15px" }}
        >
          Paswoord
        </div>
      </div>
      <div className="w-full h-max md:w-[21rem] md:h-[2rem] mt-2 flex items-center justify-center md:justify-end">
        <a
          href="/"
          className="text-sm text-gray-400 hover:text-gray-500 decoration-none transition duration-300 "
        >
          Forgot your password?
        </a>
      </div>
      <div className="w-full h-max mt-2 flex items-center justify-center">
        <button
          type="submit"
          onClick={handleLogin}
          className=" px-9 py-3 text-md bg-sky-500 rounded-md text-stone-50 hover:bg-sky-400 transition duration-300"
        >
          LOGIN
        </button>
      </div>
      <div className="w-full h-max mt-2 flex items-center justify-center">
        <hr className="border-t w-[6rem] border-gray-400"></hr>
        <p className="text-center p-1">OR</p>
        <hr className="border-t w-[6rem] border-gray-400"></hr>
      </div>
      <div className="w-full h-max mt-2 flex items-center justify-center gap-3 z-10 ">
        <a
          href="/"
          className=" px-4 py-2 md:px-8 md:py-3 bg-sky-100 hover:bg-sky-200 rounded-md transiton duration-300"
        >
          <FcGoogle className="text-2xl" />
        </a>
        <a
          href="/"
          className="px-4 py-2 md:px-8 md:py-3 bg-sky-100 hover:bg-sky-200  rounded-md transiton duration-300"
        >
          <BsFacebook className="text-2xl text-sky-700" />
        </a>
        <a
          href="/"
          className="px-4 py-2 md:px-8 md:py-3 bg-sky-100 hover:bg-sky-200  rounded-md transiton duration-300"
        >
          <AiFillApple className="text-2xl" />
        </a>
      </div>
      <div className="w-full h-[2rem] mt-2 mb-2 sm:mb-0 flex items-center justify-center gap-5  z-50">
        <p
          onClick={toggleForm}
          className="text-sm  hover:text-gray-500 decoration-none transition duration-300 cursor-pointer "
        >
          <span>Don't have account?</span>
          <span className="font-bold pl-1">Register Now</span>
        </p>
      </div>
    </form>
  );
}
