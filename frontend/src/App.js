import './App.css'
import imagem from './logo_multisearch.png'
import { IoIosSearch } from "react-icons/io";
import ApiData from './ApiData';
import { useState } from "react";



function App() {

  //utilizando useState para possibilitar a mudança do campo input em tempo real
  const [name, setName] = useState("")
  
  return (
    <div className="App">

      <img src={imagem}></img>
      <div className="barraPesquisa">
        <input type="text" id="input" onChange={(e) =>{setName(e.target.value)}}></input>
        <button className="button"><IoIosSearch/></button>
      </div>


      {/* função que irá verificar o valor que o usuario digitou e retornar o valor correspondente do banco de dados */}
      <ApiData search={name}/>

    </div >
  );
}

export default App;
