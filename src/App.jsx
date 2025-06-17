import { Header } from './componentes/Header'
// import Footer from './componentes/Footer/Footer'
import { Section } from './componentes/Section/Section'
import './App.css'


function App() {
  return (
    <>
      <Header title="Mi página web" show={false}/>
      <Section title="nombre"/> 
      {/* <Footer/> */}
    </>
  )
}

export default App
