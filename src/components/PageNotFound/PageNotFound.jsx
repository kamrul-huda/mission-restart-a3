import React from "react";
import error from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen bg-gray-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="mb-8 relative flex justify-center">
            <div className="relative">
              <img
                src={error}
                alt="404 Illustration"
                className="w-full max-w-sm"
              />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            Oops, page not found!
          </h1>
          <p className="py-6 text-slate-500">
            The page you are looking for is not available.
          </p>

          <button
            onClick={() => navigate("/")}
            className="btn btn-primary bg-[#8b5cf6] hover:bg-[#7c3aed] border-none text-white px-8"
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
