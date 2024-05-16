import './App.css';

//10- Importando imagem do Assects
import ibirapuera from "./assets/Ibirapuera.jpg"

//11 - Importando Hooks - useState 
import Dados from './Componentes/Dados';

function App() {
  return(
   <div className="AppAvancado">
    <h1>Proximos passos REACT JS</h1>

    {/* 9- Inserindo imagem do Public*/}
    <img src="/SP.jpg" alt="Imagem de Cima, São Paulo"></img>

    {/*Importando imagem do assets*/}
    <img src={ibirapuera} alt="Foto do Parque Ibirapuera"></img>

    {/*importando Hooks*/}
    <Dados/>
    </div>
  )
}

export default App;
