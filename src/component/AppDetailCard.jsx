import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToInstallDB, getInstalledApp } from "../hooks/addToDB";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const AppDetailCard = ({ apps }) => {
  const { id } = useParams();
  const [isInstalled, setIsInstalled] = useState(false);

  const {
    title,
    downloads,
    ratingAvg,
    image,
    companyName,
    reviews,
    size,
    description,
    ratings,
  } = apps;

  console.log(description);
  useEffect(() => {
    const storedInstallAppData = getInstalledApp();
    const isAlreadyInstalled = storedInstallAppData.includes(parseInt(id));
    setIsInstalled(isAlreadyInstalled);
  }, [id]);

  const addToInstalledList = (id) => {
    addToInstallDB(parseInt(id));
    setIsInstalled(true);
  };

  const formatLabel = (value) => {
    if (value >= 1_000_000_000) return "1B+";
    if (value >= 1_000_000) return "1M+";
    if (value >= 100_000) return "100K+";
    return value.toLocaleString();
  };

  //  Sort ratings descending by star
  const sortedRatings = [...ratings].sort((a, b) => {
    const starA = parseInt(a.name); // "5 star" → 5
    const starB = parseInt(b.name);
    return starB - starA;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-left p-4">
        <div className="w-full md:w-2/5 lg:w-1/5 flex justify-center items-center mb-4">
          <img
            className="pt-1 w-[220px] h-[220px] object-cover rounded-xl"
            src={image}
            alt=""
          />
        </div>

        <div className="w-full md:w-3/5 lg:w-4/5">
          <h3 className="text-2xl font-semibold text-gray-800">
            Title: {title}
          </h3>
          <h3 className="text-sm font-semibold text-gray-800 border-b-2 border-gray-300 pb-3">
            Developed by <span className="text-purple-600">{companyName}</span>
          </h3>
          <div className="flex items-center justify-start gap-8 mt-3 text-sm">
            <h2 className="font-bold flex flex-col items-start gap-2 p-1">
              <span>
                <img
                  className="w-6"
                  src="/icon-downloads.png"
                  alt="icon-download.png"
                />
              </span>
              <p className="text-sm">Download</p>
              <span className="text-lg">{formatLabel(downloads)}</span>
            </h2>
            <h2 className="font-bold flex flex-col items-start gap-2 p-1">
              <span>
                <img
                  className="w-6"
                  src="/icon-ratings.png"
                  alt="icon-ratings.png"
                />
              </span>
              <p className="text-sm">Rating</p>
              <span className="text-lg">{ratingAvg}</span>
            </h2>
            <h2 className="font-bold flex flex-col items-start gap-2 p-1">
              <span>
                <img
                  className="w-6"
                  src="/icon-review.png"
                  alt="icon-review.png"
                />
              </span>
              <p className="text-sm">Reviews</p>
              <span className="text-lg">{reviews}</span>
            </h2>
          </div>
          <div className="mt-4 border-b-2 border-gray-300 pb-3">
            <button
              onClick={() => addToInstalledList(id)}
              disabled={isInstalled}
              className={`btn transition-all duration-300 ${
                isInstalled
                  ? "bg-green-800 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-800 text-white"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Chart Section */}
      <div className="mt-8 px-2 md:px-4">
        <h3 className="text-xl text-left font-semibold mb-4">
          Ratings Breakdown
        </h3>
        <div className="bg-white  rounded-lg ">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={sortedRatings}
              layout="vertical"
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={80} />
              <Tooltip />
              <Bar dataKey="count" fill="#7C3AED" radius={[0, 4, 4, 0]}>
                <LabelList dataKey="count" position="right" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8 px-4">
        <h3 className="text-left text-xl font-semibold mb-2">Description</h3>
        {description.map((des) => (
          <p className="text-justify py-3">{des}</p>
        ))}
      </div>
    </div>
  );
};

export default AppDetailCard;
