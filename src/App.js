import Logo from "./troll-face.png";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header
                title="Meme Generator"
                logo_src={Logo}
                subtitle="React Course - Project 3"
            />
            <Meme />
        </div>
    );
}

export default App;
