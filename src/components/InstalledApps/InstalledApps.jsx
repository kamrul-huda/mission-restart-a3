import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Download, Star } from "lucide-react";
import toast from "react-hot-toast";

const InstalledApps = () => {
  const apps = useLoaderData();
  const [installedIds, setInstalledIds] = useState([]);
  const [sortType, setSortType] = useState("asc");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledIds(saved);
  }, []);

  const installedApps = apps.filter((app) => installedIds.includes(app.id));

  const sortedApps = [...installedApps].sort((a, b) => {
    return sortType === "asc" ? a.size - b.size : b.size - a.size;
  });

  const handleUninstall = (id, title) => {
    const updated = installedIds.filter((item) => item !== id);
    setInstalledIds(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.success(`${title} Uninstalled`);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-6">
      <div className="w-[70%] mx-auto px-4 sm:px-6 lg:px-2">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Your Installed Apps
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Explore all installed apps
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
          <p className="font-medium">{sortedApps.length} Apps Found</p>

          <select
            className="select select-bordered select-sm w-full sm:w-auto"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="asc">Sort by Size (Small → Large)</option>
            <option value="desc">Sort by Size (Large → Small)</option>
          </select>
        </div>

        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-base-100 p-4 rounded-lg shadow-sm gap-4"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={app.image || "https://via.placeholder.com/150"}
                    alt={app.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-semibold text-base sm:text-lg">
                    {app.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1 text-green-600">
                      <Download size={14} />
                      {new Intl.NumberFormat("en", {
                        notation: "compact",
                      }).format(app.downloads)}
                    </span>
                    <span className="flex items-center gap-1 text-orange-500">
                      <Star size={14} />
                      {app.ratingAvg}
                    </span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="btn btn-success btn-sm mt-2 sm:mt-0 w-full sm:w-auto"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>

        {sortedApps.length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-sm sm:text-base">
            No installed apps found
          </p>
        )}
      </div>
    </div>
  );
};

export default InstalledApps;
