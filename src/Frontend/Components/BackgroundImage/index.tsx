import style from './style.module.css'

interface Props {
    imgUrl: string
    imgHeight: string
}

const BackgroundImage = (props: Props) => {
  return (
    <section className={style.section} style={{maxHeight: props.imgHeight}}>
        <img src={props.imgUrl} alt="image background" />
        <div />
    </section>
  )
}

export default BackgroundImage