import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import './index.css';

function App() {
  const [rickAndMort, setRickAndMort] = useState ([]);

  const fetchrickandMort = async () => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character`
    );


    const characterURLs = res.data.results.map(character => character.image);
    console.log(characterURLs);


    console.log(res.data)
    setRickAndMort(res.data);
  };


  useEffect(() => {
    fetchrickandMort();
  }, []);
console.log(rickAndMort.results[0].image)
const fallbackImage = "https://wheelofnames.com/images/open-graph-image.png"
  return (
  <div className="App">
    <div className="RnMContainer"> 
      <h1 className='title'>Rick and Morty</h1>
        <div className= 'img'>
        <img src={rickAndMort.results[0]?.image || fallbackImage} alt="" />
        </div>
            <div className = 'RnMBtn'>
            <button onClick={fetchrickandMort}> ← </button>
            <button onClick={fetchrickandMort}> → </button>
            </div>
        </div>
    </div>)
  
}
export default App;

