import React from "react";

const InstalledOneAppDetails = ({ installList }) => {
  const { title, downloads, ratingAvg, image, companyName, reviews, size } =
    installList;

  const formatLabel = (value) => {
    if (value >= 1_000_000_000) return "1B+";
    if (value >= 1_000_000) return "1M+";
    if (value >= 100_000) return "100K+";
    return value.toLocaleString(); // fallback raw
  };
  console.log(installList);
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 bg-white rounded-xl shadow-md">
      {/* Image Section */}
      <div className="flex justify-center items-center lg:w-1/5 w-full">
        <img
          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-[220px] lg:h-[220px] object-cover rounded-xl"
          src={image}
          alt="App Thumbnail"
        />
      </div>

      {/* Info Section */}
      <div className="lg:w-4/5 w-full">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Title: {title}
        </h3>
        <h3 className="text-sm font-semibold text-gray-800 border-b-2 border-gray-300 pb-3 mt-1">
          Developed by <span className="text-purple-600">{companyName}</span>
        </h3>

        {/* Stats Section */}
        <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-6 mt-4 text-sm">
          {/* Downloads */}
          <div className="flex flex-col items-start gap-2 p-1 font-bold">
            <img
              className="w-6"
              src="/icon-downloads.png"
              alt="Downloads Icon"
            />
            <p>Download</p>
            <span className="text-lg">{formatLabel(downloads)}</span>
          </div>

          {/* Ratings */}
          <div className="flex flex-col items-start gap-2 p-1 font-bold">
            <img className="w-6" src="/icon-ratings.png" alt="Ratings Icon" />
            <p>Rating</p>
            <span className="text-lg">{ratingAvg}</span>
          </div>

          {/* Reviews */}
          <div className="flex flex-col items-start gap-2 p-1 font-bold">
            <img className="w-6" src="/icon-review.png" alt="Review Icon" />
            <p>Reviews</p>
            <span className="text-lg">{reviews}</span>
          </div>
        </div>

        {/* Install Button */}
        <div className="mt-4">
          <button
            onClick={() => addToInstalledList(id)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition"
          >
            Install Now ({size}MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstalledOneAppDetails;
