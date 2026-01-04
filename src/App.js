import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.route';
import Navbar from "./routes/navbar/navbar.route"
import './App.scss';
import Portfolio from './routes/portfolio/portfolio.route';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Route>
      </Routes>
  );
}

export default App;
