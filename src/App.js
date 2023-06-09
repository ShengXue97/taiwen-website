import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Messages } from "./components/Messages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Messages />
    </div>
  );
}

export default App;
