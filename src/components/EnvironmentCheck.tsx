import React, { useEffect, useState } from "react";

const EnvironmentCheck = () => {
  const [envVars, setEnvVars] = useState<Record<string, string>>({});

  useEffect(() => {
    // Collect all environment variables that start with VITE_
    const viteEnvVars: Record<string, string> = {};
    Object.keys(import.meta.env).forEach((key) => {
      if (key.startsWith("VITE_")) {
        viteEnvVars[key] = import.meta.env[key]
          ? "Set (value hidden)"
          : "Not set";
      }
    });

    setEnvVars(viteEnvVars);
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Environment Variables Check</h2>

      <div className="space-y-2">
        {Object.keys(envVars).length > 0 ? (
          Object.entries(envVars).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b pb-2">
              <span className="font-medium">{key}:</span>
              <span
                className={
                  value === "Not set" ? "text-red-500" : "text-green-500"
                }
              >
                {value}
              </span>
            </div>
          ))
        ) : (
          <p>No VITE_ environment variables found</p>
        )}
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-medium mb-2">VITE_MAKE_WEBHOOK_URL Status:</h3>
        <p
          className={
            import.meta.env.VITE_MAKE_WEBHOOK_URL
              ? "text-green-500"
              : "text-red-500"
          }
        >
          {import.meta.env.VITE_MAKE_WEBHOOK_URL
            ? "Set and available"
            : "Not set or empty"}
        </p>
      </div>
    </div>
  );
};

export default EnvironmentCheck;
