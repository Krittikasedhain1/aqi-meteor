"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LocationType = {
  latitude: number;
  longitude: number;
} | null;

const requestLocation = (
  rqCallback: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => void
) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      rqCallback({ latitude, longitude });
      // You can now use the latitude and longitude as needed.
    },
    (error) => {
      console.error(`Error getting location: ${error.message}`);
    }
  );
};

const CTAButton = () => {
  const [location, setLocation] = useState<LocationType>();
  const router = useRouter();

  useEffect(() => {
    if ("geolocation" in navigator) {
      if (navigator.permissions) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              requestLocation(({ latitude, longitude }) => {
                setLocation({ latitude, longitude });
              });
            } else if (permissionStatus.state === "prompt") {
              requestLocation(({ latitude, longitude }) => {
                router.push(`/station/${latitude}/${longitude}`);
              });
            } else {
              alert(
                "Location access denied. Please allow location access in your browser settings."
              );
            }
          });
      } else {
        alert("Geolocation is not supported by your browser");
      }
    }
  }, [router]);

  const handleShareLocation = () => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            requestLocation(({ latitude, longitude }) => {
              setLocation({ latitude, longitude });
            });
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
