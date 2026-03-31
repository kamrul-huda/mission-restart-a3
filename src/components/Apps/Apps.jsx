import React, { useState } from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";

const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState("");

  // 🔍 Search only by title
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="text-center mx-auto space-y-6 bg-gray-100 pt-6 px-4">
      <div className="w-[70%] text-center mx-auto">
        {/* Title */}
        <div className="space-y-4 p-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our All Applications
          </h1>
          <p className="text-gray-500">Explore all apps developed by us</p>
        </div>

        {/* 🔍 Search Input */}
        <div className="flex justify-between items-center gap-4 mb-6">
          <p className="text-sm text-gray-500">
            Showing {filteredApps.length} of {apps.length} apps
          </p>

          <input
            type="text"
            placeholder="Search by app name..."
            className="input input-bordered w-full max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8">
          {filteredApps.map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>

        {/* No Result */}
        {filteredApps.length === 0 && (
          <p className="text-gray-500 mt-10">No apps found</p>
        )}
      </div>
    </div>
  );
};

export default Apps;
