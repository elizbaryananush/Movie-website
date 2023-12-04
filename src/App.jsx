import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Explore2 from './Pages/Explore';
import Genres from './Pages/Genres';
import Movie from './Pages/Movie';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore2 />} />
          <Route path='/genre' element={<Genres />} />
          <Route path='/:id' element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
