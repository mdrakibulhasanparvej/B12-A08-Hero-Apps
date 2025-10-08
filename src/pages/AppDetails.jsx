import React from "react";
import useApp from "../hooks/useApp";
import { useParams } from "react-router-dom";
import AppDetailCard from "../component/AppDetailCard";

const AppDetails = () => {
  const { app, loading, error } = useApp();
  const data = useParams();
  const convtDataId = parseInt(data.id);

  const apps = app.find((a) => a.id === convtDataId);
  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....</p>;
  return (
    <div>
      <section className="trending-app">
        <div className="bg-white py-12 px-6 md:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="">
              {loading && <p>Loading apps...</p>}
              {error && <p>Error loading apps.</p>}
              <AppDetailCard apps={apps}></AppDetailCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDetails;
