import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'
import Biography from './components/Biography'
import Clients from './components/Clients'

function App(){
  return(
    <div>
      <Navbar />
      <Hero/>
      <Portfolio/>
      <Services/>
      <Team/>
      <Biography/>
      <Clients/>
    </div>
  )
}

export default App