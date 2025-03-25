
import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

interface ReportMapProps {
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}

const ReportMap = ({ location }: ReportMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    // Check if the Google Maps API is available
    if (window.google && window.google.maps && mapRef.current) {
      // Initialize the map
      const mapOptions: google.maps.MapOptions = {
        center: { lat: location.lat, lng: location.lng },
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl: true,
        zoomControl: true,
      };

      // Create a new map instance
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);

      // Add a marker at the incident location
      markerRef.current = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: mapInstanceRef.current,
        title: "Incident Location",
        animation: window.google.maps.Animation.DROP,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: "#FF0000",
          fillOpacity: 0.8,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          scale: 10,
        },
      });

      // Add info window with location details
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px;">
            <h3 style="margin: 0; font-size: 14px; font-weight: bold;">Incident Location</h3>
            <p style="margin: 4px 0 0; font-size: 12px;">${location.address}</p>
            <p style="margin: 4px 0 0; font-size: 12px;">Lat: ${location.lat.toFixed(6)}, Lng: ${location.lng.toFixed(6)}</p>
          </div>
        `,
      });

      markerRef.current.addListener("click", () => {
        infoWindow.open(mapInstanceRef.current, markerRef.current);
      });

      // Open info window by default
      infoWindow.open(mapInstanceRef.current, markerRef.current);
    }

    return () => {
      // Clean up resources when component unmounts
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
    };
  }, [location]);

  // If Google Maps API is not loaded, show fallback UI
  const GoogleMapsNotLoaded = () => (
    <div className="text-center max-w-sm">
      <MapPin className="h-16 w-16 text-red-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">Map Integration</h3>
      <p className="text-gray-600 mb-2">Location coordinates:</p>
      <p className="font-mono text-xs bg-gray-200 p-2 rounded">
        Latitude: {location.lat}<br />
        Longitude: {location.lng}<br />
        Address: {location.address}
      </p>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {window.google && window.google.maps ? (
        <div 
          ref={mapRef} 
          className="w-full h-full rounded-md overflow-hidden"
          style={{ minHeight: "400px" }}
        />
      ) : (
        <div className="bg-gray-100 w-full h-full flex flex-col items-center justify-center">
          <GoogleMapsNotLoaded />
        </div>
      )}
    </div>
  );
};

export default ReportMap;
