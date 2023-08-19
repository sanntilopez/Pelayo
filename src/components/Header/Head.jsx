import React, { useEffect } from 'react'
import "./header.css"
import { Link, useHref, useParams} from 'react-router-dom'


const Head = () => {
  const width = window.innerWidth
  let as = useHref("")
  useEffect(() => {
    console.log(as);
  }, [as])

  const getActiveR = (e) => {
    let a = document.querySelectorAll(".respons");
    let arrayLi = Array.from(a);
    let activo = arrayLi.find(cv => cv.classList.contains("active"));
    
    if (activo) {
      activo.classList.remove("active");
    }
    e.classList.add("active")
  };

  
  const getActive = (e) => {
    let a = document.querySelectorAll(".nav-link");
    let arrayLi = Array.from(a);
    let activo = arrayLi.find(cv => cv.classList.contains("active"));
    
    if (activo) {
      activo.classList.remove("active");
    }
    e.classList.add("active")
  };

  window.onscroll = function() {
    let y = window.scrollY;
    let nav = document.querySelector(".navbar")
    if (y > 0) {
      
      nav.classList.add("scr")
    } else {
      nav.classList.remove("scr")
    }
  };

  return (
    <header className="header">
      <div className="position-absolute d-flex justify-content-center w-100">
        <nav className="navbar navbar-expand-lg menu z-3 position-fixed" >
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/img/list.svg" alt="menu" width={30}/></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex justify-content-around w-100 fw-bold" >
                <Link className="nav-link active"  onClick={(e) => getActive(e.target)} to={"/"} >{width < 991 ? <div className='respons active' onClick={(e) => getActiveR(e.target)} role="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">INICIO</div> : "INICIO"}</Link>
                <Link className="nav-link" to={"/productos"} onClick={(e) => getActive(e.target)}>{width < 991 ? <div className='respons' onClick={(e) => getActiveR(e.target)} role="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">PRODUCTOS</div> : "PRODUCTOS"}</Link>
                <Link className="nav-link" to={"/contacto"}  onClick={(e) => getActive(e.target)}>{width < 991 ? <div className='respons' onClick={(e) => getActiveR(e.target)} role="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup">CONTACTO</div> : "CONTACTO"}</Link>
              </div>
            </div>
            </div>
                </nav>
                </div>
                <div className="hero">
                  <div className="heroBox">
                    <img src="/img/logo.png" alt="pelayo frigorifico" />
                      <h2>Somos una marca líder en la producción de fiambres en Argentina</h2>
                      </div>
                      </div>
                </header>
  )
}

export default Head