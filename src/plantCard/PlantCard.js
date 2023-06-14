import React, {useState} from 'react'
import './PlantCard.css'

const PlantCard = ({name, image, sun, water, cycle}) => {
  const [cardFlip, setCardFlip] = useState(true)

  const flipCard = e => setCardFlip(currentValue => !currentValue)

  return (
    <div className='plantCardContainer'>
      {name}
      { cardFlip ? <img className = 'plantPic' src={image} onClick={flipCard}/> : 
      <div className='plantDetails' onClick={flipCard}> 
        Light Requirements? <br/>{sun}<br/>
        Water Requirements? <br /> {water} <br/>
        Annual or Perennial? <br/> {cycle} <br/>
      </div> }
    </div>
  )
}

export default PlantCard