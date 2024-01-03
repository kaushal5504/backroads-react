import React from 'react'
import Title from './Title'
import {tours} from '../data'

const Tour = () => {
  return (
    <section className="section" id="tours">
    <Title title="our" subTitle="tours" />

    <div className="section-center featured-center">
      {tours.map((tour)=>{
        const {id, image,date,title,text,country,days,amount} = tour;
      return(  <article  className="tour-card" key={id}>
        <div  className="tour-img-container">
          <img src={image} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>
           {text}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {country}
            </p>
            <p>{days}</p>
            <p>{amount}</p>
          </div>
        </div>
      </article>
      )
      })}
    
    </div>
  </section>

  )
}

export default Tour
