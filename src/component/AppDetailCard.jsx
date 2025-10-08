import React from "react";

const AppDetailCard = ({ apps }) => {
  const {
    id,
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
  const formatLabel = (value) => {
    if (value >= 1_000_000_000) return "1B+";
    if (value >= 1_000_000) return "1M+";
    if (value >= 100_000) return "100K+";
    return value.toLocaleString(); // fallback raw
  };
  console.log(apps);
  return (
    <div>
      <div className="flex items-center justify-center gap-3  text-left p-4 border-b-2 border-gray-300 pb-3">
        <div className="w-1/5 flex justify-center items-center">
          <img
            className="pt-1 w-[220px] h-[220px] object-cover rounded-xl"
            src={image}
            alt=""
          />
        </div>

        <div className="w-4/5">
          <h3 className="text-2xl font-semibold text-gray-800">
            Title: {title}
          </h3>
          <h3 className="text-sm font-semibold text-gray-800 border-b-2 border-gray-300 pb-3">
            Developed by <span className="text-purple-600">{companyName}</span>
          </h3>
          <div className="flex items-center justify-start gap-8 mt-3 text-sm">
            <h2 className=" font-bold flex flex-col items-start gap-2  p-1 ">
              {" "}
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
            <h2 className=" font-bold flex flex-col items-start gap-2  p-1 ">
              {" "}
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
            <h2 className=" font-bold flex flex-col items-start gap-2  p-1 ">
              {" "}
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
          <div>
            <button className="btn">install Now ({size}MB)</button>
          </div>
        </div>
      </div>
      <div>
        <h2>
          Ratings:{" "}
          {ratings.map((a) => (
            <p>Name: {a.name}</p>
          ))}
        </h2>
      </div>

      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetailCard;
