import { IoFlagOutline } from 'react-icons/io5'
import { PiCalendarBlank, PiPaperPlaneTilt, PiUsers } from 'react-icons/pi'
import InputIconText from '../InputIconText'
import style from './style.module.css'
import FormButton from '../FormButton'

const FormInputs = () => {
  const iconSize: number = 20
  const iconColor: string = '#A9AFBB'

  return (
    <section className={style.section}>
        <form>
            <InputIconText 
                icon={<PiPaperPlaneTilt size={iconSize} color={iconColor} />} 
                title='Destination' 
                placeHolder='Destination' 
                typeOperation='text'
            />
            <InputIconText 
                icon={<IoFlagOutline size={iconSize} color={iconColor} />} 
                title='Type' 
                placeHolder='Type' 
                typeOperation='text'
            />
            <InputIconText 
                icon={<PiCalendarBlank size={iconSize} color={iconColor} />} 
                title='When' 
                placeHolder='Date' 
                typeOperation='date'
            />
            <InputIconText 
                icon={<PiUsers size={iconSize} color={iconColor} />} 
                title='Guests' 
                placeHolder='Guests' 
                typeOperation='text'
            />
            <FormButton title='Search' goTo='' />
        </form>
    </section>
  )
}

export default FormInputs