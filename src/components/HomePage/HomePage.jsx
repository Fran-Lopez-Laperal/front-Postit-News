import React, { useState } from 'react'

import './HomePage.css'
import News from '../News/News'
import {Link} from 'react-router-dom'

const FloatingButton= () => {
  return (
    <div className="floating-button">
      <Link to="/crear-noticia">+</Link>
      <Link to="/crear-noticia">Crear Noticia</Link>
      
    </div>
  );
};

const HomePage = () => {

 const [orderBy, setOrderBy] = useState('latest')

  const handleOrder =  (newsOrder) => {
    setOrderBy(newsOrder)
    console.log('hola')
  }

  return (

    <>
      <section className='homePage'>
        <section className='homePage__section__news'>
          <News orderBy={orderBy}/>
        </section>
        
        <FloatingButton />
      </section>

    </>
  )
}
export default HomePage
