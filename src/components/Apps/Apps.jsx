import React, { useState } from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";

const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredApps, setFilteredApps] = useState(apps);

  const handleSearch = (value) => {
    setSearch(value);
    setLoading(true);

    setTimeout(() => {
      const result = apps.filter((app) =>
        app.title.toLowerCase().includes(value.toLowerCase()),
      );

      setFilteredApps(result);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="text-center mx-auto space-y-6 bg-gray-100 pt-6 px-4">
      <div className="w-[70%] text-center mx-auto">
        <div className="space-y-4 p-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our All Applications
          </h1>
          <p className="text-gray-500">Explore all apps developed by us</p>
        </div>

        <div className="flex justify-between items-center gap-4 mb-6">
          <p className="text-sm text-gray-500">
            Showing {filteredApps.length} of {apps.length} apps
          </p>

          <input
            type="text"
            placeholder="Search apps..."
            className="input input-bordered w-full max-w-md"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="flex justify-center mt-10">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredApps.map((app) => (
              <App key={app.id} app={app} />
            ))}
          </div>
        )}

        {filteredApps.length === 0 && (
          <p className="text-gray-500 mt-10">No apps found</p>
        )}
      </div>
    </div>
  );
};

export default Apps;
