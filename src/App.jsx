import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Technologies } from "./components/Technologies";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { CVPage } from "./pages/CV";
import { ArticlesPage } from "./pages/Articles";
import { ArticlePage } from "./pages/Article";
import { NotFoundPage } from "./pages/NotFound";
import { useScrollToHash } from "./hooks/useScrollToHash";

const Home = () => {
  useScrollToHash();

  return (
    <>
      <Navbar />
      <Header />
      <Technologies />
      <Experience />
      <Projects />

      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
