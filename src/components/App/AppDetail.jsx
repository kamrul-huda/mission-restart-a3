import { Download, Star, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AppRatingChart from "../AppRatingChart/AppRatingChart";

const AppDetail = () => {
  const appData = useLoaderData();

  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(saved);
  }, []);

  const isInstalled = installedApps.includes(appData.id);

  const handleInstall = () => {
    if (isInstalled) return;
    const updated = [...installedApps, appData.id];
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto pt-6  w-[70%]">
        {/* App Card */}
        <div className="bg-base-100 flex flex-col md:flex-row gap-6 items-center p-4 sm:p-6 rounded-lg shadow-md">
          {/* App Icon */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center bg-base-200 rounded-lg overflow-hidden">
            <img
              src={appData.image || "https://via.placeholder.com/150"}
              alt={appData.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* App Details */}
          <div className="flex-1 w-full flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              {appData.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-500">
              Developed by{" "}
              <span className="text-primary font-medium cursor-pointer hover:underline">
                {appData.companyName}
              </span>
            </p>

            <div className="divider my-2"></div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <Star className="h-8 w-8 text-warning mb-1" />
                <p className="text-sm text-gray-500">Average Ratings</p>
                <p className="text-lg sm:text-xl font-bold">
                  {appData.ratingAvg}
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <Download className="h-8 w-8 text-primary mb-1" />
                <p className="text-sm text-gray-500">Downloads</p>
                <p className="text-lg sm:text-xl font-bold">
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(appData.downloads)}
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <ThumbsUp className="h-8 w-8 text-secondary mb-1" />
                <p className="text-sm text-gray-500">Total Reviews</p>
                <p className="text-lg sm:text-xl font-bold">
                  {new Intl.NumberFormat("en-US", {
                    notation: "compact",
                  }).format(appData.reviews)}
                </p>
              </div>
            </div>

            {/* Install Button */}
            <div className="mt-4 sm:mt-6 flex justify-center sm:justify-start">
              <button
                onClick={handleInstall}
                disabled={isInstalled}
                className={`btn px-6 py-2 text-base sm:text-lg w-full sm:w-auto ${
                  isInstalled ? "btn-disabled" : "btn-success"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now (${appData.size} MB)`}
              </button>
            </div>
          </div>
        </div>

        {/* Rating Chart */}
        <div className="divider my-6"></div>
        <div className="bg-base-200 rounded-box p-5">
          <AppRatingChart ratings={appData.ratings} />
        </div>

        {/* Description */}
        <div className="divider my-6"></div>
        <div className="my-6">
          <h1 className="text-xl sm:text-2xl font-semibold mb-2">
            Description
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            {appData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
