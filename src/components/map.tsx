import React, { useEffect, useRef, type ReactElement, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { createRoot } from "react-dom/client";
import type { Station } from "../types/StationTypes";
import { getStations } from "../services/StationService";
 

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3 className="text-rose-600 text-4xl font-extrabold">{status} ..</h3>;
  if (status === Status.FAILURE) return <h3 className="text-rose-600 text-4xl font-extrabold">{status} ...</h3>;
  return <></>;
};

function MyMapComponent({
  center,
  zoom,
  stations,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  stations: Station[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map>();

  useEffect(() => {
    if (window.google) {
      map.current = new window.google.maps.Map(ref.current!, {
        center,
        zoom,
      });

      stations.forEach((station) => {
        new window.google.maps.Marker({
          map: map.current,
          position: station.coords,
        });
      });
    }
  }, [stations]);

  return (
    <>
      <div
        ref={ref}
        id="map"
        className="w-full h-96 rounded-3xl border-4 border-fuchsia-700"
      />
    </>
  );
}

export function MapCont() {
  const center = { lat: 6.242654953589494, lng: -75.58980189639384 };
  const zoom = 16.4;

  const [stations, setStations] = useState<Station[] | null>(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const data = await getStations();
        setStations(data);
      } catch (error) {
        console.error("Error fetching stations:", error);
        // Handle the error as needed
      }
    };

    fetchStations();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if (stations === null || !stations) {
    return <h1 className="text-rose-600 text-4xl font-extrabold">Loading...</h1>;
  }

  return (
    <Wrapper
      apiKey={import.meta.env.PUBLIC_KEY ?? ''}
      render={render}
      libraries={["marker"]}
    >
      <MyMapComponent center={center} zoom={zoom} stations={stations} />
    </Wrapper>
  );
}
const rootElement = document.querySelector(".map");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<MapCont />);
  
}
