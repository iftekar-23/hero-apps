import React from "react";
import errorImg from "../assets/error-404.png"; 
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-5">
            <img
                src={errorImg}
                alt="404 Error"
                className="w-80 md:w-96 mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Oops, page not found!
            </h1>
            <p className="text-gray-500 mb-6">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
