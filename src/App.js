
import './App.css';
import Footer from './Component/Footer/Footer';
import Game from './Component/Game/Game';
import Home from './Component/Home/Home';
import {Route, Routes} from 'react-router';
import Snake from './Component/Snake/Snake';
import Morpion from './Component/Morpion/Morpion';
import Tutorial from './Component/Tutorial/Tutorial';
import Project from './Component/Projets/Projects';

function App() {
  return ( 
  
    <div className="App">
      
   <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/games" element={<Game />}/>
  <Route path="/games/Snake" element={<Snake />}/>
  <Route path="/games/Morpion" element={<Morpion />}/>
  <Route path="/tutorial" element={<Tutorial />}/>
  <Route path="/project" element={< Project />}/>




  </Routes>
      <Footer />
      
    </div>
   
  );
}

export default App;
