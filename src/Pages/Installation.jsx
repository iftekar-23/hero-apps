import React, { useState } from "react";
import { loadInstalled, removeInstalled } from "../utilis/localStorage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installed = () => {
    const [installedApps, setInstalledApps] = useState(() => loadInstalled());
    const [sortOrder, setSortOrder] = useState("none");

    if (!installedApps.length)
        return (
            <div className="text-center text-gray-500 text-xl mt-20">
                No Installed Apps Found
            </div>
        );

    const sortedApps = (() => {
        if (sortOrder === "asc") return [...installedApps].sort((a, b) => a.size - b.size);
        if (sortOrder === "desc") return [...installedApps].sort((a, b) => b.size - a.size);
        return installedApps;
    })();

    
    const handleUninstall = (id, title) => {
        removeInstalled(id);
        setInstalledApps((prev) => prev.filter((p) => p.id !== id));
        toast.info(`${title} uninstalled successfully!`, {
            position: "top-center",
            autoClose: 2000,
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-14">
            <div className="max-w-6xl mx-auto px-4">
               
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Your Installed Apps
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

            
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-gray-700 font-semibold text-lg">
                        {sortedApps.length} Apps Found
                    </h2>

                    <div className="flex items-center gap-2">
                        <label className="text-gray-600">Sort By Size:</label>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="border rounded-md p-2 text-sm text-gray-600"
                        >
                            <option value="none">None</option>
                            <option value="asc">Small → Large</option>
                            <option value="desc">Large → Small</option>
                        </select>
                    </div>
                </div>

           
                <div className="space-y-4">
                    {sortedApps.map((app) => (
                        <div
                            key={app.id}
                            className="flex items-center justify-between bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-gray-800 font-semibold text-lg">
                                        {app.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                        <span>📥 {app.downloadsText}</span>
                                        <span>⭐ {app.ratingAvg}</span>
                                        <span>{app.size} MB</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleUninstall(app.id, app.title)}
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Installed;
