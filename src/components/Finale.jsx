import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import BirthdayMessage from './BirthdayMessage'
import Wish from './wish.jsx'
import './Finale.css'

export default function Finale() {
  const [ref, seen] = useInView(0.5)
  const [step, setStep] = useState(0)
  const [stage, setStage] = useState('intro') // intro → wish → card

  // timed reveal: each line appears after a pause
  useEffect(() => {
    if (!seen) return
    const times = [600, 3200, 6200, 9000]
    const timers = times.map((t, i) => setTimeout(() => setStep(i + 1), t))
    return () => timers.forEach(clearTimeout)
  }, [seen])

  return (
    <section className="screen finale" id="finale" ref={ref}>

      {stage === 'intro' && (
        <>
          <div className="lines">
            {step >= 1 && <p className="title fade-in big">Twenty-five trips around the sun since that night... and you&rsquo;re still shining.</p>}
            {step >= 3 && <p className="text fade-in"><em>And I&rsquo;m really glad you are.</em> 🥹</p>}
          </div>

          {step >= 4 && (
            <div className="fade-in bottom">
              <p className="title happy">HAPPY 25TH</p>
              <p className="heart">♡</p>
              <p className="small">— from me</p>
              <button className="link-btn" onClick={() => setStage('wish')}>
                one last thing →
              </button>
            </div>
          )}
        </>
      )}

      {stage === 'wish' && <Wish onDone={() => setStage('card')} />}
      {stage === 'card' && <BirthdayMessage />}
    </section>
  )
}