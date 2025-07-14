import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPS = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <div className="w-full flex items-center justify-between px-6 py-4 border-b relative">
        <Link to="/" className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          Go back to home
        </Link>
      </div>

      {/* Main Forgot Password Section */}
      <div className="flex h-screen w-full overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:flex w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://login.decathlon.net/assets/side_picture-q3YSYl53.webp"
            alt="Forgot password side"
          />
        </div>

        {/* Right Forgot Password Form */}
        <div className="flex w-full md:w-1/2 items-center justify-center px-6">
          <form className="w-full max-w-md flex flex-col items-center">
            <h2 className="text-4xl text-gray-900 font-medium">Forgot Password</h2>
            <p className="text-sm text-gray-500/90 mt-3 text-center">
              Enter your email to reset your password
            </p>

            {/* Email Input */}
            <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full px-6 gap-2 bg-white mb-6 mt-8">
              <svg width="16" height="11" fill="#6B7280" viewBox="0 0 16 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" />
              </svg>
              <input
                type="email"
                placeholder="Email"
                className="w-full text-sm placeholder-gray-500/80 outline-none bg-transparent"
                required
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
            >
              Send Reset Link
            </button>

            {/* Back to Login Link */}
            <p className="text-gray-500/90 text-sm mt-4">
              Remembered your password?
              <Link to="/login" className="text-indigo-400 hover:underline ml-1">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPS;




