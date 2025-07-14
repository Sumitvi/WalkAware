import { useEffect, useState, useRef } from "react";

export default function App() {
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [network, setNetwork] = useState("Detecting...");
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef();

  // Geolocation API
  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setCoords({
              lat: pos.coords.latitude.toFixed(4),
              lng: pos.coords.longitude.toFixed(4),
            });
          },
          () => setCoords({ lat: "Permission", lng: "Denied" })
        );
      }
    };

    fetchLocation();
    const interval = setInterval(fetchLocation, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  // Network API
  useEffect(() => {
    if (navigator.connection) {
      const conn = navigator.connection;
      const update = () => setNetwork(conn.effectiveType);
      update();
      conn.addEventListener("change", update);
      return () => conn.removeEventListener("change", update);
    } else {
      setNetwork("Not Supported");
    }
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6 flex items-center justify-center">
      <div
        ref={sectionRef}
        className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-6 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700">🌿 WalkAware</h1>

        <div className="bg-blue-50 rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-semibold text-blue-600">📍 Location</h2>
          <p className="text-gray-700">
            Latitude: <b>{coords.lat || "..."}</b><br />
            Longitude: <b>{coords.lng || "..."}</b>
          </p>
          {coords.lat && coords.lng && (
            <iframe
              title="map"
              className="mt-3 w-full h-40 rounded-md border"
              src={`https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`}
            />
          )}
        </div>

        <div className="bg-green-50 rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-semibold text-green-700">📶 Network</h2>
          <p className="text-gray-700">
            Connection Type: <b>{network}</b>{" "}
            {network.includes("wifi") && "✅"}
          </p>
        </div>

        <div
          className={`rounded-lg p-4 shadow-md ${
            visible ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <h2 className="text-lg font-semibold text-gray-800">👀 Visibility</h2>
          <p className="text-gray-700">
            Page is currently:{" "}
            <span className="font-bold">{visible ? "Active ✅" : "Inactive ⏸️"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
