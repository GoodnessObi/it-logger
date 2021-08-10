import { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })
  return (
    <div className="App">
      <h2>We here</h2>
    </div>
  );
}

export default App;
