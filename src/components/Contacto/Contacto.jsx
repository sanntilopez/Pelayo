import React, { useRef } from 'react'
import "./contacto.css"
import emailjs from '@emailjs/browser';


const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bqieyxp', 'template_78x6557', form.current, '-DY-PKOHnqnzxwgdz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    
  return (
    <section className=" contacto my-5">
        <div className='container py-5'>
            <div className="row">
                <div className='col-md-6 info'>
                    <h3>CONTACTANOS!</h3>
                    <h4>HORARIOS</h4>
                    <p><b>Estamos abiertos de lunes a viernes <br /> 6hs - 15 hs</b></p>
                    <h4>TELÉFONO</h4>
                    <p>{"(011) 4686-4336"}</p>
                    <b>Carhué 2668, C1440 <br />CABA, Mataderos</b>
                </div>
                <div className='col-md-6 g-2'>
                    <form className='d-flex flex-column gap-3'  ref={form} onSubmit={sendEmail}>
                            <input type="text" id='name' name='name'    placeholder='Nombre' />
                            <input type="email" id='email' name='email'  placeholder='Email' />
                            <input type="text" name="telefono" id="telefono"  placeholder='Telefono'/>  
                            <textarea name="message" id="message"  cols="30" rows="10" placeholder='Mensaje'></textarea>
                            <input type="submit" value="Enviar" className='button' />
                    </form>
                </div>
            </div>
            <div className='row mt-2'>
                <div className="mapa col-md-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.85652020044!2d-58.50366938877803!3d-34.666592808217146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc91c0c57c817%3A0xa6ffa2cdbac23264!2sFrigor%C3%ADfico%20Pelayo%20S.R.L.!5e0!3m2!1ses-419!2sar!4v1689950898868!5m2!1ses-419!2sar" width={"100%"} height={500} style={{border:"0",paddingTop:"2rem"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacto