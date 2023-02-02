import { useState } from "react";
import TextControl from "./UI/TextControl";
import { buttonsLeft, buttonsRight } from './data/data';
import Autocomplete from "./UI/Autocomplete";
import "./App.css";

function App() {

  const [buttons, setButtons] = useState(buttonsRight)

  return (
    
    <div className="App">
      <h2>Задание 1</h2>
      <div className="App__header">
        <button className='App__btn' onClick = {() => setButtons(buttonsRight)}>
          Тестовый контроль с двумя кнопками справа
        </button>
        <button className='App__btn' onClick =  {() => setButtons(buttonsLeft)}>
          Тестовый контроль по одной кнопке справа и слева
        </button>
      </div>

      <div className="App__wrapper">
        <TextControl buttons={buttons} />
      </div>
  
      <h2 className="App__task-title">Задание 2</h2>
      <div className="App__autocomplete-wrapper">
        <div><Autocomplete count={10} /> </div>
        <div><Autocomplete count={3} /> </div>
      </div>
    </div>
  );
}

export default App;
