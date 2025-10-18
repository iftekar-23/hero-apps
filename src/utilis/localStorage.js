// Get installed apps
export const loadInstalled = () => {
  try {
    const data = localStorage.getItem("installedApps");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Add app to installed list
export const addInstalled = (app) => {
  const installed = loadInstalled();
  try {
    const isDuplicate = installed.some((p) => p.id === app.id);
    if (isDuplicate) {
      alert("Already installed!");
      return;
    }
    const updated = [...installed, app];
    localStorage.setItem("installedApps", JSON.stringify(updated));
  } catch (err) {
    console.error(err);
  }
};

// Remove app from installed list
export const removeInstalled = (id) => {
  const installed = loadInstalled();
  try {
    const updated = installed.filter((p) => p.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  } catch (err) {
    console.error(err);
  }
};
