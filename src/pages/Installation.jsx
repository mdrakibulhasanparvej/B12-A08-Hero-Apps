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
    <div >
      {installLists.map((installList) => (
        <InstalledOneAppDetails
          key={installLists.id}
          installList={installList}
        ></InstalledOneAppDetails>
      ))}
    </div>
  );
};

export default Installation;
