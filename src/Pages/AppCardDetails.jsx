import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/Hooks";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import downImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import reviewImg from '../assets/icon-review.png'
import { addInstalled, loadInstalled } from "../utilis/localStorage";

const AppCardDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const app = apps.find((a) => a.id === parseInt(id));
  const [installed, setInstalled] = useState(false);


  useEffect(() => {
    const installedApps = loadInstalled();
    const alreadyInstalled = installedApps.some((p) => p.id === parseInt(id));
    if (alreadyInstalled) setInstalled(true);
  }, [id]);

  if (!app) {
    return <div className="text-center text-xl mt-20">App not found!</div>;
  }

 
  const ratingData = app.ratings.map((r) => ({
    name: r.name,
    value: r.count,
  }));

  const handleInstall = () => {
    if (installed) return; 
    addInstalled(app);
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          className="w-60 h-60 rounded-xl object-cover shadow-md"
          src={app.image}
          alt={app.title}
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
          <p className="text-gray-500 mb-4">
            Developed by <span className="text-blue-700">{app.companyName}</span>
          </p>
          <hr className="my-10 w-full border-gray-300" />

          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex flex-col items-center">
              <img src={downImg} alt="" />
              <p className="text-gray-500">Downloads</p>
              <span className="text-2xl font-bold">
                {app.downloadsText}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <img src={ratingImg} alt="" />
              <p className="text-gray-500">Average Rating</p>
              <span className="text-2xl font-bold">
                {app.ratingAvg}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <img src={reviewImg} alt="" />
              <p className="text-gray-500">Total Reviews</p>
              <span className="text-2xl font-bold">
                {app.reviews.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <hr className="my-10 border-gray-300" />

      <h2 className="text-xl font-semibold mb-5">Ratings</h2>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart
            data={ratingData}
            layout="vertical"
            margin={{ left: 60, right: 20 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="value" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="my-10">
        <h1 className="text-3xl font-bold">Description:</h1>
            <p>{app.description}</p>
      </div>
    </div>
  );
};

export default AppCardDetails;
