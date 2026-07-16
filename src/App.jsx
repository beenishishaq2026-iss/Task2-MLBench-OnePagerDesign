import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'

function App(){
  return(
    <div>
      <Navbar />
      <Hero/>
      <Portfolio/>
      <Services/>
      <Team/>
    </div>
  )
}

export default App