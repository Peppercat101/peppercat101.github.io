import "./styles/app.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SideBar />
      <header className="content">
        <h1>Melissa Peters</h1>
      </header>
    </div>
  );
}

export default App;
