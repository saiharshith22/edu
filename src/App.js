import "./App.css";
import About from "./components/About";
import FeatureProduct from "./components/FeatureProduct";
import Header from "./components/header/Header";
import MainComponent from "./components/MainComponent";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main>
      <Header />
      <MainComponent />
      {/* <div className="main_container">
        
      </div> */}
      <About />
      <FeatureProduct />
      <Testimonials />
    </main>
  );
}

export default App;
