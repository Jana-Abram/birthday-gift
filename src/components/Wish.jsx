import { useState } from 'react'
import './Wish.css'

export default function Wish({ onDone }) {
  const [made, setMade] = useState(false)

  return (
    <div className="wish fade-in">
      {!made ? (
        <>
          <p className="text">
            Close your eyes for a second.<br />
            <em>Make a wish, then tap the star.</em>
          </p>
          <button className="wish-star" onClick={() => setMade(true)} aria-label="Make a wish">
            ✦
          </button>
        </>
      ) : (
        <>
          <span className="shooting" aria-hidden="true" />
          <p className="text fade-in late">
            Wish made.<br />
            <em>I hope it comes true.</em>
          </p>
          <button className="link-btn fade-in late" onClick={onDone}>
            open your card →
          </button>
        </>
      )}
    </div>
  )
}