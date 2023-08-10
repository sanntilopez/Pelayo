import React from 'react'
import "./certificados.css"

const Certificados = () => {
  return (
    <section className="container section certificados">
        <div className="row">
          <h2 className='section__title'>CERTIFICADOS</h2>
        </div>
        <div className="row">
          <div className="col-md-3 d-flex flex-column align-items-center cert">
            <div className='m-1 cer'>
              <img src="/img/sintacc.jpg" alt="sin tacc" />
              <h3>Sin T.A.C.C.</h3>
              <p>Pelayo se asegura de elaborar los productos sin Gluten.</p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center cert">

            <div className='m-1 cer'>
              <img src="/img/Senasa.jpeg" alt="senasa" />
              <h3>Servicio Nacional de Sanidad y Calidad Agroalimentaria</h3>
              <p>Pelayo esta certificado por el Servicio Nacional de Sanidad y Calidad Agroalimentaria</p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center cert">
            <div className='m-1 cer'>
              <img src="/img/premioapsal.jpg" alt="premio apsal" />
              <h3>Premio Apsal 2018</h3>
              <p>Pelayo recibio en 2018 el premio Apsal el cual reconoce la excelencia en productos y servicios de la Industria Productora de Alimentos.</p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center cert">
            <div className='m-1 cer'>
              <img src="/img/acumar.png" alt="acumar" />
              <h3>Acumar</h3>
              <p>Pelayo esta certificado por la Autoridad de Cuenca Matanza Riachuelo</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Certificados