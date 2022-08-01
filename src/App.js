import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import QRCode from 'qrcode';

function App() {

  const [src, setSrc] = useState(null);
  const [qrcode, setQRCode] = useState(null);

  const GenerateQRCode = () => {
    QRCode.toDataURL(src).then((data) => {
      setQRCode(data);
    })
  }


  return (
    <div className="App">

        <div>

          <h1>QRCode Generator</h1>
          <p>Enter your contract address here</p>

          <form>
            <input type="text" placeholder="Put contract address here!" onChange={(x) => setSrc(x.target.value)}></input>
            <button onClick={GenerateQRCode}>Generate QR Code</button>
          </form>

        </div>

        <img src={qrcode}/>

    </div>
  );
}

export default App;
