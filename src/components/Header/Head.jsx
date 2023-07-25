import React from 'react'
import "./header.css"
import { Link} from 'react-router-dom'

let getActive = (e) => {
  let a = document.querySelectorAll(".nav-link");
  let arrayLi = Array.from(a);

  let activo = arrayLi.find(cv => cv.classList.contains("active"));

  if (activo) {
    activo.classList.remove("active");
  }
  e.classList.add("active")
  console.log(arrayLi);
};

const Head = () => {
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
            <img src="/img/list.svg" alt="menu" width={40}/></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex justify-content-around w-100 fw-bold">
                <Link className="nav-link active" onClick={(e) => getActive(e.target)} to={"/"}>INICIO</Link>
                <Link className="nav-link" to={"/nosotros"}  onClick={(e) => getActive(e.target)}>NOSOTROS</Link>
                <Link className="nav-link" to={"/productos"}  onClick={(e) => getActive(e.target)}>PRODUCTOS</Link>
                <Link className="nav-link" to={"/contacto"}  onClick={(e) => getActive(e.target)}>CONTACTO</Link>
              </div>
            </div>
            </div>
                </nav>
                </div>
                <div className="hero">
                  <div className="heroBox">
                    <img src="./img/logo.png" alt="pelayo frigorifico" />
                      <h2>Somos una marca líder en la producción de fiambres en Argentina</h2>
                      </div>
                      </div>
                </header>
  )
}

export default Head