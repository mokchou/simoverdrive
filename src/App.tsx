import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DealsStrip from './components/DealsStrip'
import ArticlesGrid from './components/ArticlesGrid'
import AboutStrip from './components/AboutStrip'
import LeadMagnet from './components/LeadMagnet'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DealsStrip />
        <ArticlesGrid />
        <AboutStrip />
        <LeadMagnet />
      </main>
      <Footer />
    </>
  )
}
