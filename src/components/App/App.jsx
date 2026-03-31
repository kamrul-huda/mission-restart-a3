import React from "react";
import { Download, Star } from "lucide-react";
import { useNavigate } from "react-router";

const App = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/appdetail/${app.id}`)}
      className="card bg-white border border-gray-100 shadow-sm p-3 hover:shadow-md transition-all cursor-pointer group"
    >
      <figure className="rounded-xl overflow-hidden bg-gray-200 aspect-square">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={
            app.image ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={app.title}
        />
      </figure>

      <div className="pt-4 pb-2 space-y-3">
        <h2 className="font-bold text-[#0F172A] text-start">{app.title}</h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 px-2 py-1 bg-green-50 rounded-md text-green-600 font-bold text-xs">
            <Download className="w-3 h-3" />
            {new Intl.NumberFormat("en", {
              notation: "compact",
            }).format(app.downloads)}
          </div>

          <div className="flex items-center gap-1 px-2 py-1 bg-orange-50 rounded-md text-orange-500 font-bold text-xs">
            <Star className="w-3 h-3 fill-current" />
            {app.ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
