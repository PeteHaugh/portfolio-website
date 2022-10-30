import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { GlobalStyle } from "./styles";
import { useLayoutEffect } from "react";
import {
  TurntablePage,
  ConnectFourPage,
  ChatroomPage,
  MainPage,
} from "./pages";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/Turntable" element={<TurntablePage />} />
          <Route path="/ConnectFour" element={<ConnectFourPage />} />
          <Route path="/Chatroom" element={<ChatroomPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
