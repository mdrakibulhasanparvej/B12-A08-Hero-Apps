// ✅ Get installed apps from localStorage
const getInstalledApp = () => {
  const storedInstallApp = localStorage.getItem("installed");
  if (storedInstallApp) {
    return JSON.parse(storedInstallApp);
  } else {
    return [];
  }
};

// ✅ Add app ID to installed list
const addToInstallDB = (id) => {
  const storedInstallAppData = getInstalledApp();
  const numericId = parseInt(id);
  if (!storedInstallAppData.includes(numericId)) {
    storedInstallAppData.push(numericId);
    localStorage.setItem("installed", JSON.stringify(storedInstallAppData));
  }
};

// ✅ Remove app ID from installed list
const removeFromInstallDB = (id) => {
  const storedInstallAppData = getInstalledApp();
  const numericId = parseInt(id);
  const updatedApps = storedInstallAppData.filter(
    (appId) => parseInt(appId) !== numericId
  );
  localStorage.setItem("installed", JSON.stringify(updatedApps));
};

export { addToInstallDB, getInstalledApp, removeFromInstallDB };
