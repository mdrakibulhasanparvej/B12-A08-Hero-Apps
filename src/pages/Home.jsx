import React from "react";
import { Typewriter } from "react-simple-typewriter";
import useApp from "../hooks/useApp";
import AppDetails from "./AppDetails";
import AppsCard from "../component/AppsCard";
import { Link } from "react-router-dom";
import ProgressCards from "../component/ProgressCards";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  const progressCard = [
    {
      title: "Total Downloads",
      value: "29.6M",
      note: "⬆ 21% More Than Last Month",
    },
    {
      title: "Total Reviews",
      value: "906K",
      note: "⬆ 46% More Than Last Month",
    },
    {
      title: "Active Apps",
      value: "132+",
      note: "🚀 31 More Will Launch",
    },
  ];
  // const text = "rakibul";
  const { app, loading, error } = useApp();
  const trendingApp = app.slice(0, 8);
  if (loading) return <p>Loading....</p>;
  console.log(app);

  return (
    <div>
      {/* Hero Section */}
      <section className="heros">
        <div className="flex flex-col justify-center text-center items-center space-y-5 py-10">
          <h2 className="text-6xl font-bold">
            We Build <br />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              <Typewriter
                words={["Productive", "Modern",'Scaleble']}
                loop={true}
                typeSpeed={180}
                deleteSpeed={80}
              ></Typewriter>
            </span>{" "}
            Apps
          </h2>
          <p>
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>

        {/* Store Buttons */}
        <div className="flex gap-5 justify-center pb-10">
          <a target="_blank" href="https://play.google.com/store/games?hl=en">
            <button className="btn">
              <img className="w-5" src="/play_store.png" alt="Play Store" />
              Google Play
            </button>
          </a>
          <a target="_blank" href="https://www.apple.com/app-store/">
            <button className="btn">
              <img className="w-5" src="/app_store.png" alt="App Store" />
              App Store
            </button>
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <div className="flex justify-center">
        <img className="w-[60%]" src="/hero.png" alt="hero_image" />
      </div>

      {/* Progress Card */}
      <section className="porgress-card">
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-12 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Trusted By Millions, Built For You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {progressCard.map((items, index) => (
                <ProgressCards key={index} items={items}></ProgressCards>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Apps */}
      <section className="trending-app">
        <div className="bg-white py-12 px-6 md:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Trending Apps
            </h2>
            <p className="text-gray-500 mb-10">
              Explore All Trending Apps on the Market developed by us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {loading && <p>Loading apps...</p>}
              {error && <p>Error loading apps.</p>}
              {trendingApp?.map((item, index) => (
                <AppsCard key={index} item={item}></AppsCard>
              ))}
            </div>

            <Link
              to="/allapps"
              className="btn mt-10 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Show All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
