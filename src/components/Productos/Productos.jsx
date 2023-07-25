import React from 'react'
import "./productos.css"
import { Link } from 'react-router-dom'

const Productos = () => {
  return (
    <section className="section productos">
        <h2>NUESTROS <span>PRODUCTOS</span></h2>
        <div className=' container '>
            <div className="row">
            <Link  to={"/categoria/ChacinadoCocido"} className='col prod red'>
                <img src="/img/salchichonprimavera.png" alt="salchichon primavera" />
                <div>
                    <h4>Chacinados Cocidos</h4>
                    <ul>
                        <li>Mortadela</li>
                        <li>Salchichones</li>
                        <li>Queso de cerdo</li>
                    </ul>
                </div>
            </Link>
            <Link  to={"/categoria/EmbutidosSecos"} className='col prod blue'>
                <img src="/img/SalaminCriollo.png" alt="salamin criollo" />
                <div>
                    <h4>Embutidos secos</h4>
                    <ul>
                        <li>Chorizo tipo calendario</li>
                        <li>Salame Milan</li>
                        <li>Longaniza Calabresa</li>
                        <li>Salamines</li>
                    </ul>
                </div>
            </Link>
            <Link  to={"/categoria/Salchichas"} className='col prod red'>
                <img src="/img/Salchichas.png" alt="salchichas" />
                <div>
                    <h4>Salchichas</h4>
                    <ul>
                        <li>Salchicha de viena con piel</li>
                        <li>Salchicha copetin</li>
                    </ul>
                </div>
            </Link>
            </div>
            <div className="row">
            <Link  to={"/categoria/Crudos"} className='col prod blue'>
                <img src="/img/JamonCrudo.png" alt="jamon crudo" />
                <div>
                    <h4>Crudos</h4>
                    <ul>
                        <li>Jamones crudos</li>
                        <li>Bondiola curada</li>
                        <li>Panceta salada</li>
                    </ul>
                </div>
            </Link>
                <Link  to={"/categoria/Cocidos"} className='col prod red'>
                    <img src="/img/JamonCocido.png" alt="jamon cocido" />
                    <div>
                        <h4>Cocidos</h4>
                        <ul>
                            <li>Fiambres</li>
                            <li>Jamones</li>
                        </ul>
                    </div>
                </Link>
                <Link  to={"/categoria/Ahumados"} className='col prod blue'>
                    <img src="/img/PastronAhumado.png" alt="pastron ahumado" />
                    <div>
                        <h4>Ahumados</h4>
                        <ul>
                            <li>Panceta ahumada Lomo natural</li>
                            <li>Panceta ahumada doble</li>
                            <li>Lomo ahumado</li>
                            <li>Pastrón ahumado</li>
                        </ul>
                    </div>
                </Link>
                </div>
                <div className="row">
                <div className='col prod red text-center'>
                    <img src="/img/bg1.jpg" alt="carne de cerdo" className='rounded-2 mt-3'/>
                    <div>
                        <h4>Cortes frescos</h4>
                        
                           <p>Cortes de cerdo frescos a demanda</p> 
                        
                    </div>
                </div>
                </div>
            <div className="row d-flex justify-content-center mt-3">
                <Link className='button col-md-3 but' to={"/productos"}>VER TODOS LOS PRUDUCTOS</Link>
            </div>
        </div>
    </section>
  )
}

export default Productos