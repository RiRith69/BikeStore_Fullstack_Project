import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { registerUser } from '../api/auth'; // ✅ Import API

const Signup = () => {
  // ✅ State
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // ✅ Form handler
  const handleSignup = async (e) => {
    e.preventDefault();
    setError(''); // ✅ Clear previous errors

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword
        })
      });

      const data = await response.json();

      console.log("Response status:", response.status);
      console.log("Response data:", data);

      if (response.ok) {
        alert("Signup successful");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Handling signup failed. Please try again.");
      console.error("Error details:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <>
      {/* Top "Go back to home" navigation */}
      <div className="w-full flex items-center justify-between px-6 py-4 border-b relative">
        <a href="/" className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          Go back to home
        </a>
      </div>

      {/* Main Signup Layout */}
      <div className="flex h-screen w-full overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://login.decathlon.net/assets/side_picture-q3YSYl53.webp"
            alt="Signup side"
          />
        </div>

        {/* Right Signup Form */}
        <div className="flex w-full md:w-1/2 items-center justify-center px-6">
          <form onSubmit={handleSignup} className="w-full max-w-md flex flex-col items-center">
            <h2 className="text-4xl text-gray-900 font-medium">Sign up</h2>
            <p className="text-sm text-gray-500/90 mt-3 text-center">
              Create an account to get started
            </p>

            {/* Google Sign-up */}
            <button
              type="button"
              className="w-full mt-8 bg-gray-100 flex items-center justify-center h-12 rounded-full hover:bg-gray-200 transition"
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="Google logo"
              />
              <span className="ml-2 text-sm text-gray-700">Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full my-5">
              <div className="flex-grow h-px bg-gray-300/90"></div>
              <p className="text-sm text-gray-500/90 whitespace-nowrap">or sign up with email</p>
              <div className="flex-grow h-px bg-gray-300/90"></div>
            </div>

            {/* Username */}
            <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full px-6 gap-2 bg-white mb-4">
              <svg width="16" height="16" fill="#6B7280" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 5.6 1.3 6 4v1H6v-1c.4-2.7 3.3-4 6-4zm0-2c-1.7 0-3-1.3-3-3S10.3 4 12 4s3 1.3 3 3-1.3 3-3 3z" />
              </svg>
              <input
                type="text"
                placeholder="Username"
                className="w-full text-sm placeholder-gray-500/80 outline-none bg-transparent"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full px-6 gap-2 bg-white mb-4">
              <svg width="16" height="11" fill="#6B7280" viewBox="0 0 16 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="w-full text-sm placeholder-gray-500/80 outline-none bg-transparent"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full px-6 gap-2 bg-white mb-4">
              <svg width="13" height="17" fill="#6B7280" viewBox="0 0 13 17">
                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" />
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="w-full text-sm placeholder-gray-500/80 outline-none bg-transparent"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full px-6 gap-2 bg-white mb-6">
              <svg width="13" height="17" fill="#6B7280" viewBox="0 0 13 17">
                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" />
              </svg>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full text-sm placeholder-gray-500/80 outline-none bg-transparent"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Error message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Signup button */}
            <button
              type="submit"
              className="w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
            >
              Sign up
            </button>

            {/* Login link */}
            <p className="text-gray-500/90 text-sm mt-4">
              Already have an account?
              <Link to="/login" className="text-indigo-400 hover:underline ml-1">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;





