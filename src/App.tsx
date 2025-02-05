import './App.css'
import Hero from './Components/Hero'
import HeroButtons from './Components/HeroButtons'

function App() {

  return (
    <>
      <div className="relative">
        <Hero />
        <div className="absolute top-0 w-full">
          <HeroButtons />
        </div>
      </div>
    </>
  )
}

export default App