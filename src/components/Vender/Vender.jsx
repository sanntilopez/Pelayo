import React from 'react'
import "./vender.css"
import { Link } from 'react-router-dom'

const Vender = () => {
  return (
    <section className='section vender container'>
        <div className='row g-5'>
            <div className='col-md-7'>
                <img src="/img/img4.jpg" alt="fiambre" width={750}/>
                <Link to={"/contacto"}>EMPEZA A VENDER</Link>
            </div>
            <div className='col-md-5 venderText'>
                <h2 className='section__title'>EMPEZA A <span>VENDER</span></h2>
                <p>Tenemos <b>la mejor calidad al mejor precio del
                mercado</b>. Somos una <b>marca líder</b> en la producción
                de fiambres en Argentina, destacada por la
                máxima calidad, con el mejor precio para poder
                llegar a todas las familias.
                Te asesoramos en cuando a la forma de venta, la
                calidad de nuestros productos, en como potenciar
                las ventas de tu negocio. 
                <b> ¡Con tu compra podes ganar banners y cartelerías
                para tu negocio!</b></p>
            </div>
        </div>
    </section>
  )
}

export default Vender