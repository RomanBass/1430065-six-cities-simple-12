import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { Icon, Marker, LayerGroup } from 'leaflet';
import { useRef, useEffect } from 'react';
import { Offer} from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useAppSelector } from '../../hooks';

type MapProps = {
  selectedOffer: Offer | undefined;
}

const defaultCity = {
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: 'Amsterdam',
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function Map(props: MapProps): JSX.Element {
  const { selectedOffer } = props;
  const mapRef = useRef(null);

  const offersBySelectedCity = useAppSelector((state) => state.offersList);
  const city = offersBySelectedCity[0]?.city || defaultCity;
  const map = useMap(mapRef, city);

  useEffect(() => {

    const layerMarkers = new LayerGroup();
    if (map) {

      map.panTo([city.location.latitude, city.location.longitude]);

      offersBySelectedCity.forEach((property) => {
        const marker = new Marker({
          lat: property.location.latitude,
          lng: property.location.longitude,
        });

        marker.setIcon(selectedOffer !== undefined && property.id === selectedOffer.id
          ? currentCustomIcon
          : defaultCustomIcon).addTo(layerMarkers);

      });
      layerMarkers.addTo(map);
    }
    return () => {layerMarkers.remove();};

  }, [city, map, offersBySelectedCity, selectedOffer ]);

  return (
    <div style={{ height: '100%' }} ref={mapRef} ></div>
  );
}

export default Map;
