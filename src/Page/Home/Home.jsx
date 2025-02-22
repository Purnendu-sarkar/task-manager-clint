import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Task Manager</h1>
        <p className="mt-4">
          Manage your tasks efficiently with our simple and intuitive system.
        </p>

        {user ? (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-green-500">
              Hello, {user.displayName}!
            </h2>
            <p className="mt-2">Ready to organize your tasks?</p>
            <Link
              to="/taskBoard"
              className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              Go to Task Board
            </Link>
          </div>
        ) : (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-blue-600">New Here?</h2>
            <p className="mt-2">Sign in to start managing your tasks.</p>
            <Link
              to="/logIn"
              className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-green-600"
            >
              Log In
            </Link>
          </div>
        )}

        <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/about"
            className="p-4 bg-white dark:bg-gray-700 shadow rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            About Us
          </Link>
          <Link
            to="/faq"
            className="p-4 bg-white dark:bg-gray-700 shadow rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            FAQ & Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
