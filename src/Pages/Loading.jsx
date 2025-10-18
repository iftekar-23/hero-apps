import React from "react";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm z-50">
      <span className="loading loading-spinner text-primary w-16 h-16"></span>
      <p className="mt-4 text-gray-700 font-semibold text-lg">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
