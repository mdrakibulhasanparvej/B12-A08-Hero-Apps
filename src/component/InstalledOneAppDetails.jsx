import React from "react";

const InstalledOneAppDetails = ({ installList, isUninstall }) => {
  const { id, title, downloads, ratingAvg, image, companyName, reviews } =
    installList;

  const isHandleUninstall = (id) => {
    isUninstall(id);
  };

  const formatLabel = (value) => {
    if (value >= 1_000_000_000) return "1B+";
    if (value >= 1_000_000) return "1M+";
    if (value >= 100_000) return "100K+";
    if (value >= 10_000) return "10K+";
    return value.toLocaleString(); // fallback raw
  };

  return (
    <div>
      <div className="border-2 border-gray-200 m-6 flex gap-6 p-4 bg-white rounded-xl shadow-md">
        {/* Image Section */}
        <div className="flex items-center ">
          <img
            className="w-15 h-15 object-cover rounded-xl"
            src={image}
            alt="App Thumbnail"
          />
        </div>

        {/* Info Section */}
        <div className="w-full justify-start ">
          <div className="flex flex-col  md:flex-row justify-between">
            <div>
              <h3 className="text-md sm:text-2xl font-semibold text-gray-800">
                Title: {title}
              </h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start lg:items-center">
                {/* Stats Section */}
                <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-6 mt-4 text-sm">
                  {/* Downloads */}
                  <div className="flex items-start gap-2 p-1 font-bold">
                    <img
                      className="w-4 md:w-6"
                      src="/icon-downloads.png"
                      alt="Downloads Icon"
                    />
                    <span className="text-sm md:text-lg">
                      {formatLabel(downloads)}
                    </span>
                  </div>

                  {/* Ratings */}
                  <div className="flex items-start gap-2 p-1 font-bold">
                    <img
                      className="w-4 md:w-6"
                      src="/icon-ratings.png"
                      alt="Ratings Icon"
                    />

                    <span className="text-sm md:text-lg">{ratingAvg}</span>
                  </div>

                  {/* Reviews */}
                  <div className="flex items-start gap-2 p-1 font-bold">
                    <img
                      className="w-4 md:w-6"
                      src="/icon-review.png"
                      alt="Review Icon"
                    />
                    <span className="text-sm md:text-lg">
                      {formatLabel(reviews)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Install Button */}
            <div className="mt-4">
              <button
                onClick={() => isHandleUninstall(id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
              >
                Uninstall
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledOneAppDetails;
