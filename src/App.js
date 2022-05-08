import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLOHr3hWaItqwiHapjwcqQG_Qkv7A3tqE",
  authDomain: "new-gappnadero.firebaseapp.com",
  projectId: "new-gappnadero",
  storageBucket: "new-gappnadero.appspot.com",
  messagingSenderId: "678058809939",
  appId: "1:678058809939:web:11dac4cfec5cae68a904a6",
  measurementId: "G-T33PVZ409G"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
