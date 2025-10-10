import React, { useEffect, useState } from "react";
import useApp from "../hooks/useApp";
import InstalledOneAppDetails from "../component/InstalledOneAppDetails";
import { getInstalledApp, removeFromInstallDB } from "../hooks/addToDB";
import Loader from "../component/Loader";

const Installation = () => {
  const { app, loading, error } = useApp();
  const [installLists, setInstallList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedInstallAppData = getInstalledApp();
    const convertSTApps = storedInstallAppData.map((id) => parseInt(id));
    const myinstallList = app.filter((apps) => convertSTApps.includes(apps.id));
    setInstallList(myinstallList);
  }, [app]);

  const handleUninstall = (id) => {
    removeFromInstallDB(id);
    setInstallList((prev) => prev.filter((app) => app.id !== id));
  };
  if (loading) return <Loader></Loader>;

  const handSort = (type) => {
    setSort(type);
    if (type === "High-Low") {
      const sortByprice = [...installLists].sort(
        (a, b) => b.downloads - a.downloads
      );
      setInstallList(sortByprice);
    }
    if (type === "Low-High") {
      const sortByprice = [...installLists].sort(
        (a, b) => a.downloads - b.downloads
      );
      setInstallList(sortByprice);
    }
  };

  if (error) return <p>Error.....</p>;

  return (
    <div>
      <div className="max-w-7xl mx-auto text-center pt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          My Installation
        </h2>
        <div className="flex items-center justify-between ">
          <div className="p-6 ">
            <h2 className="text-2xl font-bold">
              <span className="text-sm font-normal">
                {installLists.length} App Found
              </span>
            </h2>
          </div>
          <div className="dropdown dropdown-end px-6">
            <div tabIndex={0} role="button" className="btn m-1">
              {sort ? "Sorted" : "Sort"} By {sort ? `-> ${sort}` : ""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handSort("High-Low")}>High-Low</a>
              </li>
              <li>
                <a onClick={() => handSort("Low-High")}>Low-High</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {installLists.map((installList) => (
        <InstalledOneAppDetails
          key={installList.id}
          installList={installList}
          isUninstall={handleUninstall}
        ></InstalledOneAppDetails>
      ))}
    </div>
  );
};

export default Installation;
