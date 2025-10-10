import React, { useEffect, useMemo, useState } from "react";
import useApp from "../hooks/useApp";
import { Link } from "react-router-dom";
import AppsCard from "../component/AppsCard";
import AppNotfound from "./AppNotfound";
import Loader from "../component/Loader";

const Allapps = () => {
  const { app, loading, error, setLoading } = useApp();
  const [search, setSearch] = useState("");

  const term = useMemo(() => search.trim().toLocaleLowerCase(), [search]);
  const searchedapp = useMemo(() => {
    if (typeof term !== "string") {
      return app;
    } else {
      return app.filter((product) =>
        product.title.toLocaleLowerCase().includes(term)
      );
    }
  }, [app, term]);

  useEffect(() => {
    if (search) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300); // টাইপ করার 300ms পরে লোডিং বন্ধ

      return () => clearTimeout(timer); // টাইপ থামার আগেই আগের টাইমার clear
    } else {
      setLoading(false); // search empty হলে সাথে সাথে লোডিং বন্ধ
    }
  }, [search, setLoading]);

  const handleGoBack = () => {
    if (!setSearch("")) {
      setSearch("");
    } else {
      window.history.back();
    }
  };
  console.log(app);

  return (
    <div>
      <section className="trending-app">
        <div className="bg-white md:py-12 px-6 md:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl pt-10 md:pt-5 md:text-4xl font-bold text-gray-800 mb-2">
              Our All Applications
            </h2>
            <p className="text-gray-500">
              Explore All Trending Apps on the Market developed by us.
            </p>
            <div>
              <div className="py-10 flex flex-col md:flex-row items-center justify-between ">
                <h2 className="text-2xl font-bold mb-5 md:mb-0">
                  <span className="text-sm font-normal">
                    ({searchedapp.length}) App Found
                  </span>
                </h2>
                <label className="input">
                  <input
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setLoading(true);
                    }}
                    type="search"
                    placeholder="Search Apps"
                  />
                </label>
              </div>
            </div>
            <div className="py-6">
              {loading && <Loader></Loader>}
              {searchedapp.length > 0 === !false ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {error && <p>Error loading apps.</p>}
                  {searchedapp?.map((item, index) => (
                    <AppsCard key={index} item={item}></AppsCard>
                  ))}
                </div>
              ) : (
                <AppNotfound handleGoBack={handleGoBack}></AppNotfound>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allapps;
