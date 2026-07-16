import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'
import Biography from './components/Biography'
import Clients from './components/Clients'
import Stats from './components/Stats'
import Blog from './components/Blog'

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
      <Stats/>
      <Blog/>
    </div>
  )
}

export default App