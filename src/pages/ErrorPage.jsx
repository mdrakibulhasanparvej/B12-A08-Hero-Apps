// ErrorPage.jsx
import { useRouteError } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center py-12 px-6 text-center">
        {/* Illustration */}
        <img
          src="/error-404.png"
          alt="App Not Found Illustration"
          className="w-[250px] mb-6"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-red-500 mb-2">
          OPPS!! PAGE NOT FOUND
        </h2>
        <p className="mb-2">The page you are looking for is not available.</p>

        {/* Description */}
        <p className="text-red-500 text-sm mb-6 max-w-md">
          <span>Warning!!</span>
          {typeof error?.message === "string"
            ? error.message
            : error?.error?.message ||
              "আপনি যে অ্যাপটি খুঁজছেন তা আমাদের সিস্টেমে পাওয়া যায়নি। অনুগ্রহ করে অন্যটি চেষ্টা করুন।"}
        </p>

        {/* Button */}
        <button
          onClick={handleGoBack}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
        >
          Go Back!
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default ErrorPage;
