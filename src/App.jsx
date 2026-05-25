import BackgroundVisuals from './components/BackgroundVisuals'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import ExperienceStrip from './components/ExperienceStrip'
import Services from './components/Services'
import Offerings from './components/Offerings'
import WorkSection from './components/WorkSection'
import Highlights from './components/Highlights'
import Personas from './components/Personas'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <BackgroundVisuals />
      <Nav />
      <main className="page__main">
        <Hero />
        <Metrics />
        <ExperienceStrip />
        <Services />
        <Offerings />
        <WorkSection />
        <Highlights />
        <Personas />
      </main>
      <Footer />
    </div>
  )
}

export default App
