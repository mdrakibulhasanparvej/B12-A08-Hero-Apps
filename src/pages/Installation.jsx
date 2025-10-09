import React, { useEffect, useState } from "react";
import useApp from "../hooks/useApp";
import InstalledOneAppDetails from "../component/InstalledOneAppDetails";
import { getInstalledApp } from "../hooks/addToDB";
import Loader from "../component/Loader";

const Installation = () => {
  const { app, loading, error } = useApp();
  const [installLists, setInstallList] = useState([]);

  useEffect(() => {
    const storedInstallAppData = getInstalledApp();
    const convertSTApps = storedInstallAppData.map((id) => parseInt(id));
    const myinstallList = app.filter((apps) => convertSTApps.includes(apps.id));
    setInstallList(myinstallList);
  }, [app]);

  if (loading) return <Loader></Loader>;
  if (error) return <p>Error.....</p>;

  return (
    <div>
      <div className="max-w-7xl mx-auto text-center pt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our All Applications
        </h2>
        <p className="text-gray-500 mb-10">
          Explore All Trending Apps on the Market developed by us.
        </p>
        <div className="p-6 flex justify-between ">
          <h2 className="text-2xl font-bold">
            <span className="text-sm font-normal">
              {installLists.length} App Found
            </span>
          </h2>
          <label className="input"></label>
        </div>
      </div>
      {installLists.map((installList) => (
        <InstalledOneAppDetails
          key={installList.id}
          installList={installList}
        ></InstalledOneAppDetails>
      ))}
    </div>
  );
};

export default Installation;
