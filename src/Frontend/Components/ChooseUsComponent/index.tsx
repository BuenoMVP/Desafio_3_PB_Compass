
import { RxCheck } from 'react-icons/rx'
import style from './style.module.css'

const ChooseUsComponent = () => {
    const iconSize: number = 20

  return (
    <section className={style.section}>
        <div className={style.title}>
            <p className='cursiveText redText'>Why choose Us</p>
            <div />
        </div>
        <p className='boldText'>Our Experiences Meet High Quality Standarts</p>
        <article>
            Holisticly optimize proactive strategic theme areas rather than effective manufactured products create.
        </article>
        <div className={style.box}>
            <div id={style.check}>
                <RxCheck color='#FC5056' size={iconSize} />
                <article className='boldText'>Travel Plan</article>
            </div>
            <div id={style.check}>
                <RxCheck color='#FC5056' size={iconSize} />
                <article className='boldText'>Cheap Rates</article>
            </div>
        </div>
        <div className={style.box}>
            <div id={style.check}>
                <RxCheck color='#FC5056' size={iconSize} />
                <article className='boldText'>Hand-picked Tuor</article>
            </div>
            <div id={style.check}>
                <RxCheck color='#FC5056' size={iconSize} />
                <article className='boldText'>Private Guide</article>
            </div>
        </div>
        <button>
            <article className='boldText'>
                Contact Us
            </article>
        </button>
    </section>
  )
}

export default ChooseUsComponent