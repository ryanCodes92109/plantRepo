import Header from './header/Header';
import './App.css';
import PlantContainer from './plantContainer/PlantContainer';
import { useEffect, useState } from 'react';

function App() {

  const api = process.env.REACT_APP_API_KEY
  const [plantState, setPlantState] = useState([])

  useEffect(() => {
    fetch(`https://perenual.com/api/species-list?key=sk-${api}`)
    .then(res => res.json())
    .then(data => setPlantState(data.data))
  }, [])


  return (
    <div className="App">
      <Header />
      <PlantContainer 
        plantState={plantState}   
      />
    </div>
  );
}

export default App;
