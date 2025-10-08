import React from "react";

const AppNotfound = ({ handleGoBack }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      {/* Illustration */}
      <img
        src="/App-Error.png"
        alt="App Not Found Illustration"
        className="w-[250px] mb-6"
      />

      {/* Title */}
      <h2 className="text-2xl font-bold text-red-500 mb-2">
        OPPS!! APP NOT FOUND
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-6 max-w-md">
        The App you are requesting is not found on our system, please try
        another app.
      </p>

      {/* Button */}
      <button
        onClick={() => handleGoBack()}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppNotfound;
