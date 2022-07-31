import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Synth from './components/Synth/Synth';

const App: React.FC = () => {
  return (
    <div className='App' >

      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Synth" element={<Synth />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
