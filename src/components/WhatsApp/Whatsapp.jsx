import React from 'react'
import "./whatsapp.css"

const Whatsapp = () => {
  return (
    <div className='wpp'>
      <div className='call'>
        Contactate!
      </div>
      <a href="https://wa.link/ki37sq" className="whatsapp" target="_blank" rel='noreferrer'><img width={38} className='whatsapp-icon' src="/img/whatsapp.svg" alt="whatsapp pelayo" />
      </a>
    </div>
  )
}

export default Whatsapp