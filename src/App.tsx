import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DealsStrip from './components/DealsStrip'
import ArticlesGrid from './components/ArticlesGrid'
import AboutStrip from './components/AboutStrip'
import LeadMagnet from './components/LeadMagnet'
import Footer from './components/Footer'
import ArticlePage from './components/ArticlePage'

function HomePage() {
  return (
    <>
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

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guides/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}
