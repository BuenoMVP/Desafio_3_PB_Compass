import { useState } from 'react'
import CalcValue from '../CalcValue'
import style from './style.module.css'

interface Props {
    value: number
}

const CalcPrice = (props:Props) => {
    const [adults, setAdults] = useState<number>(1)
    const [kids, setKids] = useState<number>(0)
    const [children, setChildren] = useState<number>(0)

    const totalValue: number = (adults * props.value) + (kids * (props.value * 0.75)) + (children * (props.value * 0.5))

  return (
    <section className={style.section}>
        <div className={style.personPrice}>
            <h1 className='blueText'>${props.value}</h1>
            <p className='blueText'> / per person</p>
        </div>
        <div className={style.count}>
            <div>
                <p className='boldText blueText'>Date</p>
                <input type="date" className={style.input}/>
            </div>
            <div>
                <p className='boldText blueText'>Time</p>   
                <select className={style.input} defaultValue={'Select'}>
                    <option value="">7 days</option>
                    <option value="">1 days</option>
                </select>
            </div>
            <div>
                <p className='boldText blueText'>Ticket</p>
                <CalcValue title='Adults (18+ years)' value={adults} setValue={setAdults}/>
                <CalcValue title='Kids (12+ years)' value={kids} setValue={setKids}/>
                <CalcValue title='Children (3+ years)' value={children} setValue={setChildren}/>
            </div>
        </div>
        <div className={style.total}>
            <span>Total</span>
            <h2 className='redText'>${totalValue}</h2>
        </div>
        <button type='button' className={style.mainButton}>
            Book now
        </button>
    </section>
  )
}

export default CalcPrice