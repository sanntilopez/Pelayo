import React from 'react'
import "./certificados.css"

const Certificados = () => {
  return (
    <section className="container section certificados">
        <div className="row">
          <h2 className='section__title'>CERTIFICADOS</h2>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex flex-column align-items-center cert">
            <div className='mx-1 cer'>
              <img src="/img/Senasa.jpeg" alt="" />
              <h3>Senasa</h3>
              <p>lorem lorem lorem lorem lorem</p>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center cert">

            <div className='mx-1 cer'>
              <img src="/img/Senasa.jpeg" alt="" />
              <h3>Senasa</h3>
              <p>lorem lorem lorem lorem lorem</p>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center cert">
            <div className='mx-1 cer'>
              <img src="/img/Senasa.jpeg" alt="" />
              <h3>Senasa</h3>
              <p>lorem lorem lorem lorem lorem</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Certificados