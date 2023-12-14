import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';

import classes from './Accomodation.module.scss';
import ImageShowcase from '../../components/ImageShowcase/ImageShowcase';

const containerStyle = {
    width: '100%',
    height: '30rem',
    marginBottom: '3rem'
};

const HOTEL_COORDS = {
    lat: 36.85605086220062,
    lng: 30.879628658294678
};

const Accomodation = () => {
    const { t } = useTranslation();
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY as string
    });
    const [showInfoBox, setShowInfoBox] = useState<boolean>();
    const hotelImage = require('../../assets/images/concorde_img.png');
    const hallPlanImage = require('../../assets/images/salloon_plan.png');

    const onLoad = useCallback((map: google.maps.Map) => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
            // const pos = { lat, lng };

            // setCurrentPosition(pos);

            // const bounds = new window.google.maps.LatLngBounds(pos);
            // map.fitBounds(bounds);
            map.setZoom(12);
        });
    }, []);

    const onMarkerClickedHandler = () => {
        setShowInfoBox(prevState => !prevState)
    }

    return (
        <div className={classes.Accomodation}>
            <ImageShowcase
                imageUrl={hotelImage}
                alt='hotel_showcase_image'
                isOverlayed
                overlayTextPosition='Bottom'
                overlayTitle='Concorde DeLuxe Resort Lara - Antalya'
                overlaySubTitle='Kemerağzı site, Tesisler Cd No:358/1, 07980 Aksu/Antalya'
            />

            <h2>{t('CongressVenue.MapsTitle')}</h2>

            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={HOTEL_COORDS}
                    zoom={6}
                    onLoad={onLoad}
                    options={{
                        mapTypeControl: false,
                        streetViewControl: false,
                        controlSize: 20
                    }}
                >
                <Marker 
                    position={HOTEL_COORDS as google.maps.LatLng | google.maps.LatLngLiteral}
                    onClick={onMarkerClickedHandler}
                >
                    {showInfoBox ? (
                        <InfoWindow>
                            <div className={classes.InfoWindow}>
                                <h3>Concorde DeLuxe Resort Lara - Antalya</h3>

                                <p>Kemerağzı site, Tesisler Cd No:358/1, 07980 Aksu/Antalya</p>

                                <p dangerouslySetInnerHTML={{ __html: t('CongressVenue.MapsInfoLink') }} />
                            </div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            </GoogleMap>
            ) : null}

            <h2>{t('CongressVenue.HallPlan')}</h2>

            <ImageShowcase
                imageUrl={hallPlanImage}
                alt='hallplan_showcase_image'
                isOverlayed={false}
            />
        </div>
    )
}

export default Accomodation;