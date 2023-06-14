import React from 'react'
import './PlantContainer.css'
import PlantCard from '../plantCard/PlantCard'

const PlantContainer = ({plantState}) => {

    const mappedPlants = plantState.map(plant => (
      <PlantCard 
        key={plant.id} 
        name={plant.common_name} 
        image = {plant.default_image.thumbnail}
        sun = {plant.sunlight}
        water ={plant.watering}
        cycle={plant.cycle}
        />
        )
      )

    console.log(plantState)

  return (

    <div className='plantContainer'>
        {mappedPlants}
    </div>
    
  )
}

export default PlantContainer