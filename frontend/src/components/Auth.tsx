import { SignupInput } from "@kishan-vyas-308/medium-blog";
import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const sendRequest =async () => {
    try {
      
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`, postInputs)
      const token = await res.data;
      localStorage.setItem("token", token.jwt)
      navigate('/blogs')
    } catch (error) {
        // aleart that request failed
    }
  }

  return (
    <div>
      <div>
        <div>Create An Account</div>
        <div>
          {type === "signup" ? "Already account?" : "Don't have an account?"}{" "}
          <Link to={ type === "signin" ? "/signup" : "/signin"}>{type === "signup" ? "Signin" : "Signup"} </Link>
        </div>
        <div>
          {
            type === "signup" &&
           <LabelledInput
            label="name"
            placeholder="John"
            onChange={(e) =>
              setPostInputs({ ...postInputs, name: e.target.value })
            }
            type="text"
          />
          }<LabelledInput
            label="email"
            placeholder="John"
            onChange={(e) =>
              setPostInputs({ ...postInputs, email: e.target.value })
            }
            type="text"
          />
          <LabelledInput
            label="password"
            placeholder="password"
            onChange={(e) =>
              setPostInputs({ ...postInputs, password: e.target.value })
            }
            type="password"
          />
        </div>

        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={sendRequest}
        >
          {type === "signup" ? "Signup" : "Signin"}
        </button>
      </div>
    </div>
  );
};

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password" | "email";
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={type}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        type={type}
        id={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        required
      />
    </div>
  );
}

export default Auth;
