import { useState } from 'react'
import StarField from './components/StarField'
import Intro from './components/Intro'
import Moon from './components/Moon'
import Saturn from './components/Saturn'
import Finale from './components/Finale'

export default function App() {
  const [flying, setFlying] = useState(false)

  // arrow click: stars rush past, then we scroll to the Moon
  const explore = () => {
    if (flying) return
    setFlying(true)
    setTimeout(() => document.getElementById('moon')?.scrollIntoView({ behavior: 'smooth' }), 900)
    setTimeout(() => setFlying(false), 1800)
  }

  return (
    <>
      <StarField flying={flying} />
      <main>
        <Intro onExplore={explore} />
        <Moon />
        <Saturn />
        <Finale />
      </main>
    </>
  )
}
