import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'
import Biography from './components/Biography'
import Stats from './components/Stats'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App(){
  return(
    <div>
      <Navbar />
      <Hero/>
      <Portfolio/>
      <Services/>
      <Team/>
      <Biography/>
      <Stats/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App