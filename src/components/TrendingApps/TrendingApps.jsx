import React from "react";
import App from "../App/App";

const TrendingApps = ({ apps }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {apps.slice(0, 8).map((app) => (
        <App key={app.id} app={app}></App>
      ))}
    </div>
  );
};

export default TrendingApps;
