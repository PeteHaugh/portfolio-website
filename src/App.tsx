import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Turntable from './components/Turntable/Turntable';

const App: React.FC = () => {
  return (
    <div className='App' >

      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          
          <Route path="/Turntable" element={<Turntable />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
