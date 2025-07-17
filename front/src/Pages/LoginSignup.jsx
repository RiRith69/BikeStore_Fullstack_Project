import React from 'react';
import { Link } from 'react-router-dom';
const LoginSignup = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <div className="w-full flex items-center justify-between px-6 py-4 border-b relative">
        {/* Go back to home */}
        <Link to="/" className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          Go back to home
        </Link>

        {/* Decathlon Logo Centered */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://i.pinimg.com/1200x/d7/8e/ea/d78eea976b027c31cee33826cbda41c6.jpg"
            // src={Logo}
            alt="Decathlon logo"
            className="h-6 md:h-8"
          />
        </div> */}
      </div>

      {/* Main Login Section */}
      <div className="flex h-screen w-full overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://login.decathlon.net/assets/side_picture-q3YSYl53.webp"
            alt="leftSideImage"
          />
        </div>

        {/* Right Login Form */}
        <div className="flex w-full md:w-1/2 items-center justify-center px-6">
          <form className="w-full max-w-md flex flex-col items-center">
            <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
            <p className="text-sm text-gray-500/90 mt-3 text-center">
              Welcome back! Please sign in to continue
            </p>

            {/* Google sign-in button */}
            <button
              type="button"
              className="w-full mt-8 bg-gray-100 flex items-center justify-center h-12 rounded-full hover:bg-gray-200 transition"
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="Google logo"
              />
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 w-full my-5">
              <div className="flex-grow h-px bg-gray-300/90"></div>
              <p className="text-sm text-gray-500/90 whitespace-nowrap">or sign in with email</p>
              <div className="flex-grow h-px bg-gray-300/90"></div>
            </div>

            {/* Email input */}
            <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full px-6 gap-2 bg-white">
              <svg width="16" height="11" fill="#6B7280" viewBox="0 0 16 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" />
              </svg>
              <input
                type="email"
                placeholder="Email id"
                className="w-full text-sm placeholder-gray-500/80 outline-none bg-transparent"
                required
              />
            </div>

            {/* Password input */}
            <div className="flex items-center mt-6 w-full border border-gray-300/60 h-12 rounded-full px-6 gap-2 bg-white">
              <svg width="13" height="17" fill="#6B7280" viewBox="0 0 13 17">
                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" />
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="w-full text-sm placeholder-gray-500/80 outline-none bg-transparent"
                required
              />
            </div>

            {/* Remember me & forgot password */}
            <div className="w-full flex items-center justify-between mt-6 text-gray-500/80 text-sm">
              <label className="flex items-center gap-2">
                <input className="h-4 w-4" type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forget-password" className="underline hover:text-gray-700">Forgot password?</Link>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="mt-6 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
            >
              Login
            </button>

            {/* Sign up link */}
            <p className="text-gray-500/90 text-sm mt-4">
              Don’t have an account?
              <Link to="/signup" className="text-indigo-400 hover:underline ml-1">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;