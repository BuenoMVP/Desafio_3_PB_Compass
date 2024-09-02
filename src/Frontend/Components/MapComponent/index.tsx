import axios from 'axios'
import style from './style.module.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useState } from 'react'

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

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleApiKey}`
      )
  
      if (response != undefined || response) {
        const coord = response.data.results[0].geometry.location
    
        setLat(coord.lat)
        setLng(coord.lng)
      } else {
        setLat(-25.441579642364893)
        setLng(-49.238875817806345)
      }
    } catch (err) {
      console.error('Erro Map: '+err)
    }

  }
  
  getAddress(props.location)

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