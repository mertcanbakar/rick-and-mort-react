import { Routes, Route} from "react-router-dom";
// PAGES
import Home from "./pages/home-page/Home";
import Characters from "./pages/characters-page/Characters";
import History from "./pages/history-page/History";
import CharacterInfo from "./pages/characters-info-page/CharacterInfo";
//KEY COMPONENTS
import Header from "./pages/key-components/Header";
import Footer from "./pages/key-components/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="character/:name" element={<CharacterInfo />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
