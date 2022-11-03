import Logo from './troll-face.png';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Meme Generator" logo_src={Logo} subtitle="React Course - Project 3" />
    </div>
  );
}

export default App;
