import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Hero } from '../../components'
import "./home.css"
 
const Home = () => {

  const {cardReducer:{cards}} = useSelector(state => state)
  return (
    
    <section className='section home-section'>
      <div className='wrapper home-wrapper'>

        <header className='home-header'>
            <Hero />
        </header>

        <div className='card-container'>
          
          {cards?.map((eachCard) => <Card key={eachCard.id} eachCard={eachCard}/>)}

        </div>

      </div>
    </section>
  )
}

export { Home}