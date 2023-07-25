import React, { useEffect, useState } from 'react'
import "./ProductosPage.css"
import productos from "../productos.json"
import { Link, useParams } from 'react-router-dom'

const ProductosPage = () => {
    const {id} = useParams({})

    const [items, setItems] = useState([])
    useEffect(() => {
        
        let q = id ? productos.productos.filter(item => item.categoria === id) : productos.productos
        setItems(q)
    },[id])

  return (
    <section className='section productosPage container-fluid d-flex flex-column align-items-center'>
        <h2 className='row '>PRODUCTOS</h2>
        <div className='line'></div>
        <div className="row categorias my-5">
            <Link to={"/productos"} className={`col cat ${id ? '' : 'bl'}`}>Todos</Link>
            <Link to={"/categoria/ChacinadoCocido"}  className={`col cat ${id === "ChacinadoCocido" ? 'bl' : ''}`}>Chacinados Cocidos</Link>
            <Link to={"/categoria/EmbutidosSecos"} className={`col cat ${id === "EmbutidosSecos" ? 'bl' : ''}`}>Embutidos secos</Link>
            <Link to={"/categoria/Salchichas"} className={`col cat ${id === "Salchichas" ? 'bl' : ''}`}>Salchichas</Link>
            <Link to={"/categoria/Crudos"} className={`col cat ${id === "Crudos" ? 'bl' : ''}`}>Crudos</Link>
            <Link to={"/categoria/Cocidos"} className={`col cat ${id === "Cocidos" ? 'bl' : ''}`}>Cocidos</Link>
            <Link to={"/categoria/Ahumados"} className={`col cat ${id === "Ahumados" ? 'bl' : ''}`}>Ahumados</Link>
        </div>
        <div className="row">
            {
                items.map(item => (
                    <div className='col-md-3 p-0 mb-3  '>
                        <div className="shadow mx-3 p-5 item d-flex flex-column gap-4">
                            <img src={item.img} alt={item.img}/>
                            <h4>{item.nombre}</h4>
                            <p>{item.descripcion}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </section>
  )
}

export default ProductosPage