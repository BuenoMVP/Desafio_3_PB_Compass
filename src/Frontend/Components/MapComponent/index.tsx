import style from './style.module.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

interface Props {
  lat: number,
  lng: number
}

const MapComponent = (props: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAUa7Do8SA0D5lFUrFWFw6Dn3usiVBvHIA'
  })

  return (
    <section className={style.section}>
      {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{height: '100%', width: '100%'}}
            center={{
              lat: props.lat,
              lng: props.lng
            }}
            zoom={15}
          >
            <Marker position={{
                lat: props.lat,
                lng: props.lng,
              }} 
            />
          </GoogleMap>
      ) : ( 
        <></>
      )}
    </section>
  )
}

export default MapComponent