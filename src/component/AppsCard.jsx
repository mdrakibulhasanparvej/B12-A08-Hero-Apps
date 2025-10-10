import React from "react";
import { Link } from "react-router-dom";

const AppsCard = ({ item }) => {
  const { id, title, downloads, ratingAvg, image } = item;

  const formatLabel = (value) => {
    if (value >= 1_000_000_000) return "1B+";
    if (value >= 1_000_000) return "1M+";
    if (value >= 100_000) return "100K+";
    return value.toLocaleString(); // fallback raw
  };
  return (
    <Link to={`/appdetails/${id}`}>
      <div className="bg-gray-100 text-left rounded-xl p-4 shadow hover:shadow-lg transition">
        <div className="min-h-[200px] rounded-xl flex justify-center items-center mb-6">
          <img
            className="w-[200px] h-[200px] rounded-xl mb-4"
            src={image}
            alt=""
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center justify-between gap-3 mt-3 text-sm">
          <h2 className="text-green-600 font-bold flex gap-2 shadow-sm bg-gray-200 p-1 rounded-sm">
            {" "}
            <span>
              <img
                className="w-4"
                src="/icon-downloads.png"
                alt="icon-download.png"
              />
            </span>
            {formatLabel(downloads)}
          </h2>
          <h2 className="text-green-600 font-bold flex gap-2 shadow-sm bg-gray-200 p-1 rounded-sm">
            {" "}
            <span>
              <img
                className="w-4"
                src="/icon-ratings.png"
                alt="icon-download.png"
              />
            </span>
            {ratingAvg}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
