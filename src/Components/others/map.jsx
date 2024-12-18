import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "./medicalCenters.json";
import L, { PolyUtil } from "leaflet";
import locationIcon from "../../assets/location.png";
export default function MapComp() {
  //map details and implementation here
  console.log(data);
  const customIcon = new L.Icon({
    iconUrl: locationIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  //this is data used for path tracing. Note the differrent values required
  const pathCoordinates = [
    [3.848, 11.502], // Start point
    [3.8659, 11.5198], // Intermediate point
    [3.8564, 11.5021], // End point
  ];
  return (
    <MapContainer center={[3.848, 11.502]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((facility, index) => (
        <Marker
          key={index}
          position={[facility.lat, facility.lon]}
          icon={customIcon}
        >
          ;
          <Popup>
            <strong>{facility.tags.name}</strong>
            <br />
            <strong>
              {facility.contact
                ? facility.tags.contact.phone || contact.email
                : " no contact"}
            </strong>
            <strong>{facility.tags.email}</strong>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={pathCoordinates} color="red" weight={5} />
    </MapContainer>
  );
}
