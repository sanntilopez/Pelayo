import React from 'react'
import Nosotros from './Nosotros/Nosotros'
import Banner from './Banner/Banner'
import Productos from './Productos/Productos'
import Vender from './Vender/Vender'
import Certificados from './Certificados/Certificados'
import Contacto from './Contacto/Contacto'

const Inicio = () => {
  return (
    <div>
        <Nosotros/>
        <Banner/>
        <Productos/>
        <Vender/>
        <Certificados/>
    </div>
  )
}

export default Inicio