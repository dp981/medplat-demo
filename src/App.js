import logo from './logo.svg';
import './App.css';
import './shared-css/styles/style1.scss'

const App = () => {
  return (
    <div className="App">
      <header className="test-style">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo React Project for Medplat
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
