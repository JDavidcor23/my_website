import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Technologies } from "./components/Technologies";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { LogoMark } from "./components/LogoMark";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Technologies />
      <Experience />
      <Projects />

      {/* Logo preview — take a screenshot of any size, then remove this section */}
      <section className="bg-[#080808] py-[60px] flex flex-col items-center gap-[40px] border-t border-[#CC0000]/10">
        <p className="font-mono text-[0.55rem] text-[#333344] tracking-[0.2em]">LOGO PREVIEW — SCREENSHOT ME</p>
        <div className="flex items-end gap-[32px] flex-wrap justify-center">
          <LogoMark size={32}  />
          <LogoMark size={64}  />
          <LogoMark size={128} />
          <LogoMark size={256} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
