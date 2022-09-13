import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useLocation 
} from 'react-router-dom';
import { GlobalStyle } from './styles';
import Main from './pages/MainPage';
import { useLayoutEffect } from 'react';
import { 
  TurntablePage, 
  ConnectFourPage, 
  ChatroomPage, 
  SpotifyPage, 
  SynthesizerPage,
  MainPage
} from './pages';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);
  return null;
} 

const App: React.FC = () => {
  return (
    <div className='App' >
      <GlobalStyle />

        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            
            <Route path="/Turntable" element={<TurntablePage />} />
            <Route path="/ConnectFour" element={<ConnectFourPage />} />
            <Route path="/Chatroom" element={<ChatroomPage />} />
            <Route path="/Spotify" element={<SpotifyPage />} />
            <Route path="/Synthesizer" element={<SynthesizerPage />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
