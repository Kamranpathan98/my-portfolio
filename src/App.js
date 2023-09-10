import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer"
import css from "./styles/app.module.scss"
import Portfolio from "./Components/Portfolio/Portfolio";
import Work from "./Components/Work/Work";
import Experties from "./Components/Experties/Experties";
const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <Footer />

    </div>
  );
};

export default App;
