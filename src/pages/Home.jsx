import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import useApp from "../hooks/useApp";
import AppsCard from "../component/AppsCard";
import { Link } from "react-router-dom";
import ProgressCards from "../component/ProgressCards";
import Loader from "../component/Loader";
import { fadeLeft, fadeUp } from "../hooks/fadeUpMotion";

const Home = () => {
  const progressCard = [
    {
      title: "Total Downloads",
      value: "29.6M",
      note: "21% More Than Last Month",
    },
    {
      title: "Total Reviews",
      value: "906K",
      note: "46% More Than Last Month",
    },
    { title: "Active Apps", value: "132+", note: " 31 More Will Launch" },
  ];

  const { app, loading, error } = useApp();
  const trendingApp = app.slice(0, 8);
  if (loading) return <Loader />;

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
        className="heros md:min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10"
      >
        <div className="flex flex-col justify-center text-center items-center space-y-5 py-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            We Build <br />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              <Typewriter
                words={["Productive", "Modern", "Scaleble"]}
                loop={true}
                typeSpeed={180}
                deleteSpeed={80}
              />
            </span>{" "}
            Apps
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.
            <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-5 justify-center pb-10">
            <a target="_blank" href="https://play.google.com/store/games?hl=en">
              <button className="btn flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
                <img className="w-5" src="/play_store.png" alt="Play Store" />
                Google Play
              </button>
            </a>
            <a target="_blank" href="https://www.apple.com/app-store/">
              <button className="btn flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
                <img className="w-5" src="/app_store.png" alt="App Store" />
                App Store
              </button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Hero Image */}
      <div className="flex justify-center px-4">
        <img
          className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%]"
          src="/hero.png"
          alt="hero_image"
        />
      </div>

      {/* Progress Card */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
        className="porgress-card"
      >
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-12 px-4 sm:px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
              Trusted By Millions, Built For You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {progressCard.map((items, index) => (
                <ProgressCards key={index} items={items} variant={fadeLeft} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trending Apps */}
      <div>
        <div className="bg-white py-12 px-4 sm:px-6 md:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Trending Apps
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-10">
              Explore All Trending Apps on the Market developed by us.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {loading && <Loader />}
              {error && <p>Error loading apps.</p>}
              {trendingApp?.map((item, index) => (
                <AppsCard key={index} item={item} variant={fadeLeft} />
              ))}
            </div>
            <Link
              to="/allapps"
              className="btn mt-10 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition text-sm sm:text-base"
            >
              Show All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
