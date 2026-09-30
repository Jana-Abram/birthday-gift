import { useMemo } from 'react'
import './StarField.css'

export default function StarField({ flying }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        opacity: 0.35 + Math.random() * 0.65,
        delay: Math.random() * 6,
        duration: 2.5 + Math.random() * 4,
      })),
    []
  )

  return (
    <div className={`starfield ${flying ? 'flying' : ''}`} aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            '--o': s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
