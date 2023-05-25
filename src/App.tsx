
import Modal from "react-modal";

import { Header } from "./components/Header";
import { MainSection } from "./components/MainSection";
import { ThemesSection } from "./components/ThemesSection";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Container } from "./styles/styles";

Modal.setAppElement('#root');

function App() {

  return (
    <Container>

      <GlobalStyles />
      <Header />

      <MainSection />

      <ThemesSection />
    </Container>
  );
}

export default App;
