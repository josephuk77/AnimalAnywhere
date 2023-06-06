"use client";
import { connectDB } from "@/util/database";
import { useEffect, useState } from "react";

export default function Home() {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const initializeMap = async () => {
      const client = await connectDB();
      const db = client.db("AnimalAnywhere");
      const result = await db.collection("post").find().toArray();

      const center = { lat: 37.5665, lng: 126.978 }; // 초기 맵 중심 좌표

      // 맵 생성
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 12,
      });

      setMap(map);
    };

    if (window.google && !map) {
      initializeMap();
    }
  }, [map]);

  const searchPlace = () => {
    // 이전 마커 제거
    clearMarkers();

    // 장소 검색
    const service = new window.google.maps.places.PlacesService(map);
    service.textSearch({ query: searchInput }, processResults);
  };

  const processResults = (results, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      // 검색 결과에 따라 마커 표시
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  };

  const createMarker = (place) => {
    const marker = new window.google.maps.Marker({
      map: map,
      position: place.geometry.location,
    });

    setMarkers((prevMarkers) => [...prevMarkers, marker]);
  };

  const clearMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
  };

  return (
    <div>
      <input
        type="text"
        id="search-input"
        placeholder="장소를 검색하세요"
        style={{ width: "300px" }}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={searchPlace}>검색</button>
      <div id="map"></div>
    </div>
  );
}
