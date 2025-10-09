import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// ইনস্টল করা অ্যাপগুলো localStorage থেকে পাওয়া
const getInstalledApp = () => {
  const storedInstallApp = localStorage.getItem("installed");
  if (storedInstallApp) {
    return JSON.parse(storedInstallApp);
  } else {
    return [];
  }
};

// নতুন অ্যাপ ইনস্টল করলে সেটি localStorage-এ যোগ করা এবং alert দেখানো
const addToInstallDB = (id) => {
  const storedInstallAppData = getInstalledApp();
  const numericId = parseInt(id);
  if (!storedInstallAppData.includes(numericId)) {
    storedInstallAppData.push(numericId);
    localStorage.setItem("installed", JSON.stringify(storedInstallAppData));

    // SweetAlert: ইনস্টল সফল হয়েছে
    MySwal.fire({
      icon: "success",
      title: "অ্যাপ ইনস্টল হয়েছে!",
      text: `অ্যাপ ID ${numericId} সফলভাবে ইনস্টল হয়েছে।`,
    });
  } else {
    // SweetAlert: আগেই ইনস্টল করা আছে
    MySwal.fire({
      icon: "info",
      title: "ইনস্টল করা আছে",
      text: `অ্যাপ ID ${numericId} আগেই ইনস্টল করা হয়েছে।`,
    });
  }
};

// অ্যাপ আনইনস্টল করলে সেটি localStorage থেকে মুছে ফেলা এবং alert দেখানো
const removeFromInstallDB = (id) => {
  const storedInstallAppData = getInstalledApp();
  const numericId = parseInt(id);
  const updatedApps = storedInstallAppData.filter(
    (appId) => parseInt(appId) !== numericId
  );
  localStorage.setItem("installed", JSON.stringify(updatedApps));

  // SweetAlert: আনইনস্টল সফল হয়েছে
  MySwal.fire({
    icon: "warning",
    title: "অ্যাপ আনইনস্টল হয়েছে",
    text: `অ্যাপ ID ${numericId} সফলভাবে মুছে ফেলা হয়েছে।`,
  });
};

export { addToInstallDB, getInstalledApp, removeFromInstallDB };
