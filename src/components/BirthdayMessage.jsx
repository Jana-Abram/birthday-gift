import { useEffect, useRef, useState } from 'react'
import './BirthdayMessage.css'

// ✏️ EDIT YOUR PERSONAL MESSAGE HERE
const MESSAGE = [
  'Happy birthday!',
  `I hope 25 brings you lots of beautiful places, unforgettable moments, and little things that make you genuinely happy.

May this year be full of good surprises, new adventures, laughter, and memories you'll want to keep forever.

I hope life is kind to you and gives you plenty of reasons to smile.

Happy 25th Birthday.`,
]

const START_DELAY = 10000 // через сколько мс начнут появляться поцелуи
const INTERVAL = 900      // как часто появляется новый поцелуй
const MAX_EDGE_KISSES = 32 // сколько всего поцелуев по краям

// случайная точка в рамке по краю карточки (центр с текстом остаётся чистым)
function edgePosition() {
  const side = Math.floor(Math.random() * 4)
  const along = 4 + Math.random() * 92
  const depth = 3 + Math.random() * 8
  if (side === 0) return { left: along, top: depth }
  if (side === 1) return { left: along, top: 100 - depth }
  if (side === 2) return { left: depth, top: along }
  return { left: 100 - depth, top: along }
}

export default function BirthdayMessage() {
  const [kisses, setKisses] = useState([])
  const nextId = useRef(0)

  const makeKiss = (pos, temp = false) => ({
    id: nextId.current++,
    left: pos.left,
    top: pos.top,
    rot: Math.round(-40 + Math.random() * 80),
    size: 1.1 + Math.random() * 0.8,
    temp,
  })

  // после паузы края карточки медленно заполняются поцелуями
  useEffect(() => {
    let interval
    let count = 0
    const start = setTimeout(() => {
      interval = setInterval(() => {
        if (count >= MAX_EDGE_KISSES) {
          clearInterval(interval)
          return
        }
        count++
        setKisses((prev) => [...prev, makeKiss(edgePosition())])
      }, INTERVAL)
    }, START_DELAY)

    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [])

  // тап по карточке: поцелуй там, куда нажали, и он исчезает
  const handleTap = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const kiss = makeKiss(
      {
        left: ((e.clientX - r.left) / r.width) * 100,
        top: ((e.clientY - r.top) / r.height) * 100,
      },
      true
    )
    setKisses((prev) => [...prev, kiss])
    setTimeout(() => setKisses((prev) => prev.filter((k) => k.id !== kiss.id)), 2600)
  }

  return (
    <div className="message fade-in">
      <div className="card" onClick={handleTap}>
        {kisses.map((k) => (
          <span
            key={k.id}
            className={`kiss ${k.temp ? 'temp' : ''}`}
            style={{
              left: `${k.left}%`,
              top: `${k.top}%`,
              '--rot': `${k.rot}deg`,
              fontSize: `${k.size}rem`,
            }}
          >
            💋
          </span>
        ))}
        <div className="card-text">
          {MESSAGE.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <p className="text final-line">
        I couldn&rsquo;t give you the stars...<br />
        <em>so I made you a little piece of them instead.</em>
      </p>
    </div>
  )
}