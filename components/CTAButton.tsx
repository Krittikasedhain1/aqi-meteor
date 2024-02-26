"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type LocationType = {
  latitude: number;
  longitude: number;
} | null;

const CTAButton = () => {
  const [location, setLocation] = useState<LocationType>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  const handleShareLocation = () => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                alert(`Your location is: ${latitude}, ${longitude}`);
                // You can now use the latitude and longitude as needed.
              },
              (error) => {
                console.error(`Error getting location: ${error.message}`);
              }
            );
          } else if (permissionStatus.state === "prompt") {
            window.location.reload();
          } else {
            alert(
              "Location access denied. Please allow location access in your browser settings."
            );
          }
        });
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };
  if (!location)
    return (
      <button
        onClick={handleShareLocation}
        className="rounded-full block  text-yellow-100 bg-green-500 hover:bg-yellow-100 hover:text-green-500 shadow-2xl hover:shadow-inner transition-all duration-150	 font-bold py-5 px-10"
      >
        Please share your location
      </button>
    );
  return (
    <div>
      <Link
        href={`/station/${location?.latitude}/${location?.longitude}`}
        className="rounded-full block  text-yellow-100 bg-green-500 hover:bg-yellow-100 hover:text-green-500 shadow-2xl hover:shadow-inner transition-all duration-150	 font-bold py-5 px-10"
      >
        Check my Air index
      </Link>
    </div>
  );
};

export default CTAButton;
