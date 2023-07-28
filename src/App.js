import './App.css';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Head from './components/Header/Head';
import Inicio from './components/Inicio';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Whatsapp from './components/WhatsApp/Whatsapp';
import ProductosPage from './components/ProductosPage/ProductosPage';


function App() {
  return (
    <div className="App">
      <Whatsapp/>
      <BrowserRouter>
      <Head/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/productos' element={<ProductosPage/>}/>
          <Route path={"/categoria/:id"} element={<ProductosPage/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>


        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
