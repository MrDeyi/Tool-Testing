import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MovieGrid from './components/movieGrid/MovieGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <div className="container">
        <Header />
        <MovieGrid />
        </div>

      <Footer />
    </div>
  )
}

export default App
