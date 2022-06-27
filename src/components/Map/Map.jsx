import React, { useRef, useEffect, useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";

import mapboxgl from "mapbox-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaHV5ZW5uZ3V5ZW4yMDAwIiwiYSI6ImNrczkxNW9sbTAybjYycHF6Zm9kd3oydXUifQ.7F7GJXh0M4jmAbz5LsTNBA";
mapboxgl.accessToken = MAPBOX_TOKEN;
const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return <div ref={mapContainer} className="map-container" />;
};

export default Map;
