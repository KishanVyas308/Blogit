import { SignupInput } from "@kishan-vyas-308/medium-blog";
import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const sendRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`, postInputs);
      const token = await res.data;
      localStorage.setItem("token", token.jwt);
      navigate('/');
    } catch (error) {
      setError('Failed to complete the request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="text-3xl font-bold text-white mb-4">{type === "signup" ? "Create An Account" : "Sign In"}</div>
      <div className="text-sm text-gray-400 mb-6">
        {type === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
        <Link to={type === "signin" ? "/signup" : "/signin"} className="text-blue-500 hover:underline">
          {type === "signup" ? "Sign In" : "Sign Up"}
        </Link>
      </div>
      <div className="space-y-4 w-full">
        {type === "signup" && (
          <LabelledInput
            label="Name"
            placeholder="John"
            onChange={(e) => setPostInputs({ ...postInputs, name: e.target.value })}
            type="text"
          />
        )}
        <LabelledInput
          label="Email"
          placeholder="john@example.com"
          onChange={(e) => setPostInputs({ ...postInputs, email: e.target.value })}
          type="email"
        />
        <LabelledInput
          label="Password"
          placeholder="••••••••"
          onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })}
          type="password"
        />
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <button
        type="button"
        className={`w-full mt-6 text-white ${loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300`}
        onClick={sendRequest}
        disabled={loading}
      >
        {loading ? 'Loading...' : type === "signup" ? "Sign Up" : "Sign In"}
      </button>
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
    <div className="mb-4">
      <label
        htmlFor={type}
        className="block mb-2 text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={type}
        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        required
      />
    </div>
  );
}

export default Auth;
