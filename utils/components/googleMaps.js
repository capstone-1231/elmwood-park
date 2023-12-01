import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const GoogleMaps = () => { 
    const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(true)

    const handleMarkerClick = () => {
        setIsInfoWindowOpen(!isInfoWindowOpen)
    }  

    const containerStyle = {
        width: '100%',
        height: '500px',
    }
    
    const center = {
        lat: 53.583973139537335,
        lng: -113.45711114471045,
    }
    
    const markerPosition = {
        lat: 53.583973139537335,
        lng: -113.45711114471045,
    }

    const api = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    return (
        <Paper elevation={3}>
            <LoadScript googleMapsApiKey={api}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    {/* Marker component */}
                    <Marker position={markerPosition} onClick={handleMarkerClick} />

                    {/* InfoWindow component */}
                    {isInfoWindowOpen && (
                        <InfoWindow
                            position={markerPosition}
                            onCloseClick={() => setIsInfoWindowOpen(false)}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <img
                                    src={"favicon.ico"}
                                    alt="Thumbnail"
                                    style={{ maxWidth: '100px', maxHeight: '10%', marginRight: '1rem' }}
                                />
                                <div>
                                    <Typography variant="subtitle1">Elmwood Park Community League</Typography>
                                    <Typography>Community center and park</Typography>
                                </div>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </Paper>
    )
}

export default GoogleMaps;
