import style from './style.module.css'

interface Props {
    height: string,
    width: string
}

const DestinationImage = (props: Props) => {
  return (
    <section className={style.section} style={{height: props.height, width: props.width}}>
        <img src="https://desafio-3-mvbp-bucket.s3.amazonaws.com/Baloes.jpg" alt="baloes" />
        <div>
            <p>174,688 Travelers</p>
            <span className='cursiveText'>United Kingdom</span>
        </div>
    </section>
  )
}

export default DestinationImage