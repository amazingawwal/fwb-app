import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white relative overflow-hidden">
        
      {/* Background Shapes */}
      {/* <div className="absolute -left-40 top-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[40%] -z-10"></div>
      <div className="absolute -right-40 bottom-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[40%] -z-10"></div> */}

      <div className="w-full max-w-md p-8 shadow-md rounded-md bg-indigo-50">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Name</label>
            <input
              type="name"
              name="name"
              placeholder="Enter your first name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your secured password"
              value={form.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-sm text-gray-500"
            >
           
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition mb-4"
          >
            Create Account
          </button>

          <div className="text-sm text-center mb-4">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 hover:underline">
                Login
            </Link>
          </div>

          <div className="my-4 flex items-center justify-center">
            <span className="border-t w-1/5"></span>
            <span className="mx-2 text-sm text-gray-500">Or Sign up with</span>
            <span className="border-t w-1/5"></span>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border px-4 py-2 rounded-md text-sm hover:bg-gray-100"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="h-5 w-5"
            />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
