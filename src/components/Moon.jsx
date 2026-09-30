import { useMemo, useState } from 'react'
import './Moon.css'

export default function Moon() {
  const [closer, setCloser] = useState(false)

  // extra sparkles that appear around the Moon after "look closer"
  const sparkles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 1.2,
      })),
    []
  )

  return (
    <section className="screen moon-screen" id="moon">
      <div className={`moon-wrap ${closer ? 'closer' : ''}`}>
        {closer &&
          sparkles.map((s) => (
            <span
              key={s.id}
              className="sparkle"
              style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
            />
          ))}
        <div className="moon">
          <span className="crater c1" />
          <span className="crater c2" />
          <span className="crater c3" />
          <span className="crater c4" />
          <span className="crater c5" />
        </div>
      </div>

      <h2 className="title small-title">The Moon</h2>
      <p className="text">That night, the Moon was already telling a story.</p>
      <p className="text">
        On October 7, 2001, the Moon was in its waning gibbous phase &mdash; just a few days past the full moon.
      </p>

      {!closer && (
        <button className="link-btn" onClick={() => setCloser(true)}>
          look closer →
        </button>
      )}
    </section>
  )
}
