import useInView from '../hooks/useInView'
import './Saturn.css'

export default function Saturn() {
  const [ref, seen] = useInView(0.6)

  return (
    <section className="screen saturn-screen" id="saturn" ref={ref}>
      <p className="small">AND THEN THERE WAS</p>
      <h2 className="title">SATURN</h2>

      <div className="stage">
        {/* Saturn: back ring, planet, front ring */}
        <svg className="saturn" viewBox="0 0 200 200" aria-label="Saturn">
          <defs>
            <radialGradient id="planet" cx="35%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#f6e3b4" />
              <stop offset="60%" stopColor="#d3a968" />
              <stop offset="100%" stopColor="#8a6a3c" />
            </radialGradient>
          </defs>
          <g transform="rotate(-18 100 100)">
            <ellipse cx="100" cy="100" rx="92" ry="22" fill="none" stroke="#e8c98a" strokeOpacity="0.55" strokeWidth="5" />
            <circle cx="100" cy="100" r="44" fill="url(#planet)" />
            <path d="M8 100 A92 22 0 0 0 192 100" fill="none" stroke="#e8c98a" strokeOpacity="0.9" strokeWidth="5" />
          </g>
        </svg>

        {/* The Moon drifts slowly in front of Saturn */}
        <div className={`passing-moon ${seen ? 'go' : ''}`} />
      </div>

      <p className="text">On October 7, 2001, the Moon passed in front of Saturn in the sky.</p>
      <p className="text"><em>And Saturn was there too, the planet with the rings.
That day, the Moon passed right in front of it,
as if the sky put on a little show just for you.</em></p>
    </section>
  )
}
