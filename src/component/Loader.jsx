import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex items-center text-3xl font-bold space-x-2">
        <span>L</span>
        <img src="/logo.png" alt="loading" className="w-10 h-10 animate-spin" />
        <span>ADING</span>
      </div>
    </div>
  );
};

export default Loader;
