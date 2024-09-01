import React from 'react'
import CheckBox from '../CheckBox'
import style from './style.module.css'

interface Props {
    title: string,
    args: string[]
}

const FiltersComponent: React.FC<Props> = ({title, args}) => {
  return (
    <section className={style.section}>
      <p>{title}</p>
      {args.map((filter) => (
        <CheckBox 
          key={filter} 
          text={filter}
        />
      ))}
      
    </section>
  )
}

export default FiltersComponent