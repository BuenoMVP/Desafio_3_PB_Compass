import style from './style.module.css'

const TravelGuides = () => {
  return (
    <section className={style.section}>
        <img src="https://desafio-3-mvbp-bucket.s3.amazonaws.com/Baloes.jpg" alt="photo" />
        <div>
            <section className='greyColorText'>
                <span>July 13, 2023</span>
                <span>
                    <ul>
                        <li>Admin</li>
                    </ul>
                </span>
            </section>
            <p className='boldText'>The impact of Covid-19 on travel & tourism industry</p>
        </div>
    </section>
  )
}

export default TravelGuides