import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Turntable from './components/Turntable/Turntable';
import Spotify from './components/Spotify/Spotify';
import ConnectFour from './components/ConnectFour/ConnectFour';

const App: React.FC = () => {
  return (
    <div className='App' >

      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          
          <Route path="/Turntable" element={<Turntable />} />
          <Route path="/ConnectFour" element={<ConnectFour />} />

          <Route path="/Spotify" element={<Spotify />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
