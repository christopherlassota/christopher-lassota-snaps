import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <PhotoGallery />
      </main>
      <Footer />
    </>
  );
};

export default App;
