import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer container-fluid p-5 mt-5'>
        <div className="row">
            <div className="col-md-12 d-flex flex-column gap-4 align-items-center ">
                <img src="/img/logo.png" alt="pelayo" width={350} style={{marginTop:"-100px"}}/>
                <div>
                    <p className=' mb-3 fs-5'><b>Frigorifico Pelayo.</b></p>
                    <p>Carhué 2668, C1440. CABA, Mataderos / {"(011) 4686 4336"}</p>
                </div>
                <div className='redes'>
                    <a href="https://www.instagram.com/frigopelayo/" target='_blank' rel='noreferrer'>
                        <img src="/img/instagram.svg" alt="instagram" />
                    </a>
                    <a href="https://www.facebook.com/pelayofrigorifico/" target='_blank' rel='noreferrer'>
                        <img src="/img/facebook.svg" alt="facebook" />
                    </a>
                    <a href="mailto:frigopelayo@yahoo.com.ar" target='_blank' rel='noreferrer'>
                        <img src="/img/envelope-fill.svg" alt="mail" />
                    </a>

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer