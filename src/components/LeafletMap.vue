<template>
    <div id="map" style="height: 500px;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  // Import your custom marker icon
  import customMarkerIcon from '../assets/mark.png'; // Adjust the path to your custom icon
  
  export default {
    name: 'LeafletMap',
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const map = L.map('map').setView([44.7866, 20.4489], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
  
        // Define the custom icon
        const customIcon = L.icon({
          iconUrl: customMarkerIcon, // Adjust the path to your custom icon
          iconSize: [38, 38], // Adjust the size as needed
          iconAnchor: [19, 38], // Adjust the anchor point as needed
          popupAnchor: [0, -38] // Adjust the popup anchor point as needed
        });
  
        // Add the marker with the custom icon
        L.marker([44.7866, 20.4489], { icon: customIcon }).addTo(map)
          .bindPopup('Кинески ресторан')
          .openPopup();
      }
    }
  };
  </script>
  
  <style>
  #map {
    height: 500px;
  }
  </style>
  