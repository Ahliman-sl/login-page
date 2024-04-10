import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

export default function SignUpForm({ toggleForm }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const BASIC_URL = "http://localhost:3005";

  async function handleSignUp() {
    const passwordRegex = /^(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long and contain at least one uppercase letter."
      );
      toggleForm();
      return;
    }
    try {
      await axios.post(`${BASIC_URL}/users`, {
        username,
        email,
        password,
      });
      toggleForm();
      alert("Successfully logged in");
    } catch (error) {
      console.error("An error occurred while saving the user.");
      alert("Hata");
    }
  }

  return (
    <form
      className="w-full h-full flex flex-col items-center justify-center"
      onSubmit={handleSignUp}
    >
      <div className="relative border-2 rounded-md p-1 border-sky-400 flex items-center justify-center">
        <MdOutlineDriveFileRenameOutline className="text-4xl pl-3 " />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-80 h-10 pl-4 outline-none rounded-md"
          required
        />
        <div
          className="absolute top-0 left-4 bg-stone-50 px-2 text-sm text-sky-400 font-semibold"
          style={{ position: "absolute", top: "-15px" }}
        >
          Name
        </div>
      </div>
      <div className="relative border-2 rounded-md p-1 border-sky-400 flex items-center justify-center mt-4">
        <MdOutlineMail className="text-4xl pl-3 " />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-80 h-10 pl-4 outline-none rounded-md"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <div
          className="absolute top-0 left-4 bg-stone-50 px-2 text-sm text-sky-400 font-semibold"
          style={{ position: "absolute", top: "-15px" }}
        >
          Email
        </div>
      </div>
      <div className="relative border-2 rounded-md p-1 border-sky-400 flex items-center justify-center mt-4">
        <BiSolidLock className="text-4xl pl-3 " />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-80 h-10 pl-4 outline-none rounded-md"
        />
        <div
          className="absolute top-0 left-4 bg-stone-50 px-2 text-sm text-sky-400 font-semibold"
          style={{ position: "absolute", top: "-15px" }}
        >
          Paswoord
        </div>
      </div>
      <div className="w-[21rem] h-[2rem] mt-2 flex items-center justify-end">
        <p
          onClick={toggleForm}
          className="text-sm text-gray-400 hover:text-gray-500 decoration-none transition duration-300  cursor-pointer "
        >
          Login
        </p>
      </div>
      <div className="w-full h-max mt-2 flex items-center justify-center">
        <button
          type="submit"
          className=" px-9 py-3 text-md bg-sky-500 rounded-md text-stone-50 hover:bg-sky-400 transition duration-300"
        >
          Sign Up
        </button>
      </div>
      <div className="w-full h-max mt-2 flex items-center justify-center">
        <hr className="border-t w-[6rem] border-gray-400"></hr>
        <p className="text-center p-1">OR</p>
        <hr className="border-t w-[6rem] border-gray-400"></hr>
      </div>
      <div className="w-full h-max mt-0 mb-5  flex items-center justify-center gap-3 z-10 ">
        <a
          href="/"
          className="px-8 py-3 bg-sky-100 hover:bg-sky-200 rounded-md transiton duration-300"
        >
          <FcGoogle className="text-2xl" />
        </a>
        <a
          href="/"
          className="px-8 py-3 bg-sky-100 hover:bg-sky-200  rounded-md transiton duration-300"
        >
          <BsFacebook className="text-2xl text-sky-700" />
        </a>
        <a
          href="/"
          className="px-8 py-3 bg-sky-100 hover:bg-sky-200  rounded-md transiton duration-300"
        >
          <AiFillApple className="text-2xl" />
        </a>
      </div>
    </form>
  );
}
