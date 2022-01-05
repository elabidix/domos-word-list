import "./App.css";
import { ListWord, WordForm } from "./containers";
import {Divider} from "antd"

function App() {
  return (
    <div className="App">
      <div style ={{width:800, padding:50}}>
        <WordForm /> 
        <Divider/>
        <ListWord />
      </div>
    </div>
  );
}

export default App;
