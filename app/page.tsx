import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JourneySections from '../components/JourneySections'
import FeaturedGrid from '../components/FeaturedGrid'
import HorizontalScroll from '../components/HorizontalScroll'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ScrollProgress from '../components/ScrollProgress'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <ScrollProgress />
      <Hero />

      <section id="featured" className="max-w-7xl mx-auto px-6 py-16">
        <FeaturedGrid />
      </section>

      <JourneySections />

      <section id="seasons">
        <HorizontalScroll />
      </section>

      <section id="foods" className="max-w-6xl mx-auto px-6 py-16">
        <Gallery />
      </section>

      <section id="testimonials" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <Testimonials />
        </div>
      </section>

      <Footer />
    </main>
  )
}
