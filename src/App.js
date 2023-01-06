import './App.css';
import {Arbitre} from "./Component/Arbitre"
import {Match} from "./Component/Match"

import {Equipe} from "./Component/equipe"
function App() {
  return (
    <div className="App">
      <form>
    <Arbitre/> 
    <hr/>
    <Match/> 
  <hr/>
  <div class="row">
    <div class="col-sm-6">
      <Equipe/>
    </div>
    
    <div class="col-sm-6">
    <div class="form-group">
    <Equipe/>
  </div>
    </div>
  </div>
</form>

      
    </div>
  );
}

export default App;
