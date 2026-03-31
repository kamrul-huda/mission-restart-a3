import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AppRatingChart = ({ ratings }) => {
  const sortedRatings = [...ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name),
  );

  return (
    <div className="w-full h-64 sm:h-72 md:h-80 bg-base-100 p-3 sm:p-4 md:p-6 rounded-xl shadow">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">
        Rating Distribution
      </h3>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={sortedRatings}
          layout="vertical"
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            type="number"
            tick={{ fontSize: 10 }}
            className="sm:text-xs md:text-sm"
          />

          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 10 }}
            width={30}
          />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#FF8811"
            radius={[6, 6, 6, 6]} // nicer rounded bars
            barSize={12} // thinner bars for small screens
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatingChart;
