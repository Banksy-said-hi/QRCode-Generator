import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { QRCode } from 'qrcode';

function App() {

  const [url, setUrl] = useState(null);
  const [qrcode, setQrCode] = useState(null);

  const GenerateQRCode = () => {
    QRCode.(url, (err, url) => {
      if (err) return console.error(err)

      console.log(url);
      setQrCode(url);
    })
  }


  return (
    <div className="App">

        <div className=".wrapper">

          <h1>QRCode Generator</h1>
          <p>Enter your contract address here</p>

          <form>
            <input type="text" placeholder="Put contract address here!" value={url} onChange={(x) => setUrl(x.target.value)}></input>
            <button onClick={GenerateQRCode}>Generate QR Code</button>
          </form>

          <img src={qrcode} />
        </div>

    </div>
  );
}

export default App;
