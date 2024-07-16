import './App.css'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import ContactForm from './components/ContactForm/ContactForm'
function App() {

  return (
    <>
     <Navbar/>
     <main className="main_container">
     <Contact/>
     <ContactForm/>
     </main>
     
    </>
  )
}

export default App
