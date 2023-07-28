import React from 'react'
import "./nosotros.css"

const Nosotros = () => {
  return (
    <section className='container section align-middle nosotros'>
        <div className='row'>
            <div className="col-md-7 px-4 d-flex flex-column justify-content-center">
                <h2 className='section__title'>NUESTRA <span>HISTORIA</span></h2>
                <p>Allá en el tiempo nacía en Asturias Pedro Sornir, quien supo
                andar a través del tiempo y finalmente fundar su propio 
                <b> frigorífico</b>. Dando origen al hoy Frigorífico Pelayo SRL, el cual
                es una empresa familiar que día a día se preocupa por
                tecnificarse y ofrecer a su publico <b>productos de alta calidad</b>.
                Haciendo pequeña mención a su nombre <b>“Pelayo”</b>, no es un
                capricho o un azar, sino, es la mas verdadera etimología, de
                ese nombre que inspiro a sus dueños a ser usado como marca
                líder. Fue el primer monarca del reino de Asturias, tenaz y
                valiente que reino en aquellas tierras defendiéndolas de las
                invasiones. Hoy con orgullo nuestra empresa lleva su nombre
                el cual es para todos los integrantes de este establecimiento
                un ejemplo a seguir.</p>
            </div>
            <div className="col-md-5 px-4">
                <img src="/img/img1.jpg" alt="fiambre" width={600}/>
            </div>
        </div>
    </section>
  )
}

export default Nosotros