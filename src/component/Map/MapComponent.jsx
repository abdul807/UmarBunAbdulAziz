import React, { useEffect } from "react";
import L from "leaflet"; // Import Leaflet
import "aos/dist/aos.css";

const MapComponent = () => {
  useEffect(() => {
    // Initialize the map when the component mounts
    const map = L.map("map", {
      center: [5.6037, -0.1870], // Example coordinates (London)
      zoom: 13,
    });

    // Add the tile layer (using OpenStreetMap here)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Add a marker on the map
    const marker1 = L.marker([5.9333, -0.9833]).addTo(map);



    // Add a popup to the marker
    marker1.bindPopup("<b>Akim Oda.</b>").openPopup();


    // Cleanup when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="h-[500px] object-contain z-100" data-aos="zoom-in">
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default MapComponent;
