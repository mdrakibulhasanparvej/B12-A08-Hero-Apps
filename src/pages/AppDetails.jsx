import useApp from "../hooks/useApp";
import { useParams } from "react-router-dom";
import AppDetailCard from "../component/AppDetailCard";
import AppNotfound from "./AppNotfound";
import Loader from "../component/Loader";

const AppDetails = () => {
  const { app, loading, error } = useApp();
  const { id } = useParams();

  const convtDataId = parseInt(id);
  const apps = app.find((a) => a.id === convtDataId);

  if (loading) return <Loader></Loader>;
  if (error) return <p>Error.....</p>;

  return (
    <div>
      <div className="trending-app">
        <div className="bg-white py-12 px-6 md:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="">
              {apps ? (
                <AppDetailCard key={apps.id} apps={apps}></AppDetailCard>
              ) : (
                <AppNotfound></AppNotfound>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
