import Header from './components/Header'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
    <Header />
     <Home/>
     <Footer/>
    </div>
    </>
  )
}

export default App