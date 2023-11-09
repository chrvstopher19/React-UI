import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import './index.css';

function App() {
  const [rickAndMort, setRickAndMort] = useState ([]);
  const [index, setIndex] = useState(0)

  const fetchrickandMort = async () => {
    const res = await axios.get(
      'https://rickandmortyapi.com/api/character');
      setRickAndMort(res.data.results);
    };
    
    useEffect(() => {
      fetchrickandMort();
    }, []);

    function next(){
      if (index === rickAndMort.length - 1){
        setIndex(0)
      } else {
        setIndex((prevIndex) => prevIndex + 1)
      }
    }

    function previous(){
      if (index === 0) {
        setIndex(rickAndMort.length - 1)
      } else {
        setIndex((prevIndex) => prevIndex - 1)
      }
    }

  const fallbackImage = "https://wheelofnames.com/images/open-graph-image.png"
  
  return (
  <div className="App">
    <div className="RnMContainer"> 
      <h1 className='title'>Rick and Morty</h1>
        <div className= 'img'>
          <h2>{rickAndMort[index]?.name}</h2>
          <img src={ rickAndMort[index]?.image || fallbackImage } />
        </div>
            <div className = 'RnMBtn'>
            <button onClick={previous}> ← </button>
            <button onClick={next}> → </button>
            </div>
        </div>
    </div>)
  
}
export default App;

