const getInstalledApp = () => {
  const storedInstallApp = localStorage.getItem("installed");
  if (storedInstallApp) {
    const storedInstallAppData = JSON.parse(storedInstallApp);
    return storedInstallAppData;
  } else {
    return [];
  }
};

const addToInstallDB = (id) => {
  console.log(id);
  const storedInstallAppData = getInstalledApp();
  if (storedInstallAppData.includes(id)) {
    return;
  } else {
    storedInstallAppData.push(id);
    localStorage.setItem("installed", JSON.stringify(storedInstallAppData));
  }
};

export { addToInstallDB, getInstalledApp };
