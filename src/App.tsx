import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useLocation 
} from 'react-router-dom';
import { GlobalStyle } from './styles';
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
    <>
      <GlobalStyle />

        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            
            <Route path="/Turntable" element={<TurntablePage />} />
            <Route path="/ConnectFour" element={<ConnectFourPage />} />
            <Route path="/Chatroom" element={<ChatroomPage />} />
            <Route path="/Spotify" element={<SpotifyPage />} />
            <Route path="/Synthesizer" element={<SynthesizerPage />} />
          </Routes>
        </Router>
      
    </>
  );
}

export default App;
