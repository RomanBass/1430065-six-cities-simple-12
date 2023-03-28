import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import { useRef, useEffect } from 'react';
import { Offer, Offers } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapProps = {
  offer: Offer;
  offers: Offers;
  selectedOffer: Offer | undefined;
}

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
  const { offer, offers, selectedOffer } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, offer);

  useEffect(() => {

    if (map) {
      offers.forEach((property) => {
        const marker = new Marker({
          lat: property.location.latitude,
          lng: property.location.longitude,
        });

        marker.setIcon(selectedOffer !== undefined && property.id === selectedOffer.id
          ? currentCustomIcon
          : defaultCustomIcon).addTo(map);

      });
    }

  }, [map, offers, selectedOffer]);

  return (
    <div style={{ height: '100%' }} ref={mapRef} ></div>
  );
}

export default Map;
