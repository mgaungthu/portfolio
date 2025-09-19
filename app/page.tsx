import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechIcons from '@/components/TechIcons'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <section className="section">
        <TechIcons />
      </section>
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
