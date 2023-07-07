import logo from './logo.svg';
import './App.css';
import Navbar from './componant/Navbar';
import Counter from './componant/Counter';
import AllRoute from './Allrouter/AllRoute';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoute/>
    </div>
  );
}

export default App;
