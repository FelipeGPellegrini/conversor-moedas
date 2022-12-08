import './App.css';
import Conversor from './componentes/Conversor';

function App() {
  return (
    <>
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
    </div>
    <p>Feito com ❤️ por <a href="https://github.com/FelipeGPellegrini">Felipe Pellegrini</a></p>
    </>
  );
}

export default App;
