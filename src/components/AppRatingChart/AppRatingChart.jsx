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
    <div className="w-full h-64 bg-base-100 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sortedRatings} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />

          <Tooltip />

          <Bar dataKey="count" fill="#FF8811" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatingChart;
