// import React, { useState } from 'react';
// import { Link, useSearchParams, useNavigate } from 'react-router-dom';
// import { getAuth, confirmPasswordReset } from 'firebase/auth';

// const NewPS = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const token = searchParams.get('token');
//   const [message, setMessage] = useState({ text: '', type: '' });
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword.length < 8) {
//       setMessage({ text: 'Password must be at least 8 characters long', type: 'error' });
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setMessage({ text: 'Passwords do not match', type: 'error' });
//       return;
//     }

//     if (!token) {
//       setMessage({ text: 'Invalid or missing reset token', type: 'error' });
//       return;
//     }

//     try {
//       const auth = getAuth();
//       await confirmPasswordReset(auth, token, newPassword);
//       setMessage({ text: 'Password reset successful! Redirecting to login...', type: 'success' });
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (error) {
//       setMessage({
//         text: error.code === 'auth/expired-action-code' ? 'Link expired, request a new one' :
//               error.code === 'auth/invalid-action-code' ? 'Invalid reset link' :
//               `Error: ${error.message}`,
//         type: 'error'
//       });
//     }
//   };

//   return (
//     <>
//       {/* Top Navigation Bar */}
//       <div className="w-full flex items-center justify-between px-6 py-4 border-b relative">
//         <Link to="/" className="flex items-center gap-2 text-sm text-gray-700 hover:text-black">
//           <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//           </svg>
//           Go back to home
//         </Link>
//       </div>

//       {/* Main Create New Password Section */}
//       <div className="flex h-screen w-full overflow-hidden">
//         {/* Left Image */}
//         <div className="hidden md:flex w-1/2">
//           <img
//             className="h-full w-full object-cover"
//             src="https://login.decathlon.net/assets/side_picture-q3YSYl53.webp"
//             alt="New password side"
//           />
//         </div>

//         {/* Right New Password Form */}
//         <div className="flex w-full md:w-1/2 items-center justify-center px-6">
//           <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
//             <h2 className="text-4xl text-gray-900 font-medium">Create New Password</h2>
//             <p className="text-sm text-gray-500/90 mt-3 text-center">
//               Enter a new password for your account
//             </p>

//             {/* Message Display */}
//             {message.text && (
//               <p
//                 className={`text-sm mt-4 text-center ${
//                   message.type === 'success' ? 'text-green-600' : 'text-red-600'
//                 }`}
//               >
//                 {message.text}
//               </p>
//             )}

//             {/* New Password Input */}
//             <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full px-6 gap-2 bg-white mb-4 mt-8">
//               <svg width="13" height="17" fill="#6B7280" viewBox="0 0 13 17">
//                 <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" />
//               </svg>
//               <input
//                 type="password"
//                 name="newPassword"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="New Password"
//                 className="w-full text-sm placeholder-gray-500/80 outline-none bg-transparent"
//                 required
//               />
//             </div>

//             {/* Confirm Password Input */}
//             <div className="flex items-center w-full border border-gray-300/60 h-12 rounded-full px-6 gap-2 bg-white mb-6">
//               <svg width="13" height="17" fill="#6B7280" viewBox="0 0 13 17">
//                 <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" />
//               </svg>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 className="w-full text-sm placeholder-gray-500/80 outline-none bg-transparent"
//                 required
//               />
//             </div>

//             {/* Save Password Button */}
//             <button
//               type="submit"
//               className="w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
//             >
//               Save Password
//             </button>

//             {/* Back to Login Link */}
//             <p className="text-gray-500/90 text-sm mt-4">
//               Return to login?
//               <Link to="/login" className="text-indigo-400 hover:underline ml-1">Sign in</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewPS;