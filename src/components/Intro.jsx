import './Intro.css'

export default function Intro({ onExplore }) {
  return (
    <section className="screen intro" id="intro">
      <p className="small fade-in">
        This is not just a website.<br />
        It&rsquo;s a tiny piece of the sky from your birthday.
      </p>

      <div className="intro-main fade-in">
        <div className="spark">✦</div>
        <h1 className="title">
          A GLIMPSE<br />OF YOUR SKY
        </h1>
        <p className="small">07.10.2001</p>
        <p className="text">
          October 7, 2001<br />
          <em>Somewhere under this sky, a new story began.</em>
        </p>
      </div>

      <button className="explore" onClick={onExplore} aria-label="Explore the sky">
        <span className="small">explore the sky</span>
        <span className="arrow">↓</span>
      </button>
    </section>
  )
}
