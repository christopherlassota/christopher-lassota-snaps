import "./styles/App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Footer from "./components/Footer/Footer";
import FilterMenu from "./components/FilterMenu/FilterMenu";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <FilterMenu />
        <Hero />
        <PhotoGallery />
      </main>
      <Footer />
    </>
  );
};

export default App;
