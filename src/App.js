
import './App.css';
import Footer from './Component/Footer/Footer';
import Game from './Component/Game/Game';

import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import {Route, Routes} from 'react-router';
import Snake from './Component/Snake/Snake';
import Morpion from './Component/Morpion/Morpion';

function App() {
  return ( 
  
    <div className="App">
      
   <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="games" element={<Game />}/>
  <Route path="games/Snake" element={<Snake />}/>
  <Route path="games/Morpion" element={<Morpion />}/>


  </Routes>
      <Footer />
      
    </div>
   
  );
}

export default App;
