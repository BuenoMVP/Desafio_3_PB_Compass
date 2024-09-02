import axios from 'axios'
import style from './style.module.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'

interface Props {
  location: string
}

const MapComponent = (props: Props) => {
  const [lat, setLat] = useState<number>(0)
  const [lng, setLng] = useState<number>(0)

  const googleApiKey: string = 'AIzaSyAUa7Do8SA0D5lFUrFWFw6Dn3usiVBvHIA'

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleApiKey
  })

  const getAddress = async (address:string) => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleApiKey}`
    )

    const coord = response.data.results[0].geometry.location

    setLat(coord.lat)
    setLng(coord.lng)
  }

  useEffect(() => {
    getAddress(props.location)
  }, [])

  return (
    <section className={style.section}>
      {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{height: '100%', width: '100%'}}
            center={{
              lat: lat,
              lng: lng
            }}
            zoom={15}
          >
            <Marker position={{
                lat: lat,
                lng: lng,
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