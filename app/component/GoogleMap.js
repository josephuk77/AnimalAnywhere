'use client'
import React, { useEffect, useRef, useState } from 'react';

function MapSearch({addr }) {
  const mapRef = useRef(null);
  let inputRef= useRef(null);
  const [map, setMap] = useState(null);
  const [results, setResults] = useState([]);
  console.log(addr);
  
  useEffect(() => {
    loadMap();
    firstsearch();
  }, []);

 function loadMap() {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 267760.0909, lng: 345123.9589 },
      zoom: 13,
    });
    setMap(map);
  }
  function firstsearch() {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: addr }, (results, status) => {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        const marker = new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
        displayResults(results);
      } else {
        alert('검색에 실패했습니다.');
      }
    });
  }

  
  
  function search() {
  
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: inputRef.current.value }, (results, status) => {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        const marker = new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
        displayResults(results);
      } else {
        alert('검색에 실패했습니다.');
      }
    });
  }

  function displayResults(results) {
    setResults(results);
  }

  function handleResultClick(result) {
    map.setCenter(result.geometry.location);
    const marker = new window.google.maps.Marker({
      map: map,
      position: result.geometry.location,
    });
  }

  return (
    <div>
       <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDdlvK3SxrBNUov23U5uV0-2BKvBFKatpc&callback=initMap&v=weekly"
      defer
    ></script>
      <input type="text" ref={inputRef} placeholder="장소 검색" />
      <button onClick={search}>검색</button>
      <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
      <ul>
        {results.map((result, index) => (
          <li key={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY} onClick={() => handleResultClick(result)}>
            {result.formatted_address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapSearch;