import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Causes from '@/components/Causes'
import Timeline from '@/components/Timeline'
import Support from '@/components/Support'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Causes />
      <Timeline />
      <Support />
      <Footer />
    </main>
  )
}
