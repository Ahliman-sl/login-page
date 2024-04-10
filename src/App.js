import { useState } from "react";
// Icons for LoginPage
import mosque from "./images/mosque.png";
import plane from "./images/plane.png";
import tower from "./images/tower.png";

// Login Form
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function App() {
  return (
    <div className="w-full h-screen bg-sky-500 flex justify-center items-center">
      <Login />
    </div>
  );
}
function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [sucsess, setSucsess] = useState(null);

  function toggleForm() {
    setIsSignUp(!isSignUp);
  }

  return (
    <div className="w-[80rem] h-[50rem]  md:h-[60rem] lg:h-[40rem] bg-stone-50 rounded-2xl flex flex-col lg:flex-row mx-5">
      <Image />
      <FormPage
        isSignUp={isSignUp}
        toggleForm={toggleForm}
        sucsess={sucsess}
        setSucsess={setSucsess}
      />
    </div>
  );
}

function Image() {
  return (
    <div className="h-full w-full lg:w-1/2 bg-image rounded-l-2xl">
      <div className="w-full h-full  lg:h-[10rem] flex flex-col items-center justify-center">
        <h1 className="italic  text-5xl font-bold text-white pt-5 font-handWrite">
          Travelista Tours
        </h1>
        <p className="pt-4 text-center text-white">
          Travel is the only purchase that enriches you in ways <br />
          beyond material wealth
        </p>
      </div>
    </div>
  );
}

function FormPage({ isSignUp, toggleForm, sucsess, setSucsess }) {
  return (
    <div className="h-full w-full lg:w-1/2 rounded-r-2xl flex flex-col relative">
      <div className="w-full h-[4rem] flex justify-end items-center ">
        <img src={plane} alt="airplane" className="pt-10 pr-5" />
      </div>
      <div className="w-full h-max flex flex-col justify-center items-center gap-3 mt-[2rem]">
        <h2 className="text-sky-500 text-6xl font-bold w-full h-max text-center">
          Welcome
        </h2>
        <p className="text-gray-400">
          {isSignUp ? "Sign up with Email" : "Login with Email"}
        </p>
        {sucsess === true && (
          <p className="text-green-500">Successfully logged in</p>
        )}
        {sucsess === false && (
          <p className="text-red-500">Username or password incorrect</p>
        )}
      </div>
      <div className="w-full h-max mt-10">
        {isSignUp ? (
          <SignUpForm toggleForm={toggleForm} />
        ) : (
          <LoginForm
            toggleForm={toggleForm}
            sucsess={sucsess}
            setSucsess={setSucsess}
          />
        )}
      </div>
      <img
        src={mosque}
        alt="mosque"
        className="items-start w-[5rem] sm:w-[10rem] object-cover absolute bottom-0 left-0"
      />
      <img
        src={tower}
        alt="mosque"
        className="items-start w-[5rem] sm:w-[10rem]  object-cover absolute bottom-0 right-0"
      />
    </div>
  );
}
