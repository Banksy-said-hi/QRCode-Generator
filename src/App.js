import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {

  const [input, setInput] = useState(null);
  const [src, setSrc] = useState(null);

  let footer = "";
  if (src) {
    footer = <QRCode fgColor="blue" bgColor="red" size={300} value={src}/>
  } else {
    footer = "Nothing is generated yet";
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setSrc(input);
  }
  
  return (

    <div className="App">
        <div>

          <h1>QRCode Generator</h1>
          <p>Enter your contract address here</p>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Put contract address here!" onChange={(x) => setInput(x.target.value)}></input>
            <input type="submit"></input>
          </form>

        </div><br></br>

        <div>{footer}</div>
    </div>
  );
}

export default App;
