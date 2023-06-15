import Header from './header/Header';
import './App.css';
import PlantContainer from './plantContainer/PlantContainer';
import { useEffect, useState } from 'react';

function App() {

  const [plantState, setPlantState] = useState([])
  const [page,setPage] = useState(1)
  const api = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const plantFetch = async () => {
      try {
        const res = await fetch(`https://perenual.com/api/species-list?page=${page}&key=sk-${api}`)
        const data = await res.json();
        setPlantState(data.data)
        setPage(prevPage => prevPage + 1)
      } catch (error) {
        console.log(error)
      }
    }
    plantFetch()
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
