import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Himanshu Singh Bisen. Built with React
          &amp; Vite.
        </p>
      </footer>
    </div>
  )
}

export default App
