import { useState } from "react";
import "./styles/App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Footer from "./components/Footer/Footer";
import FilterMenu from "./components/FilterMenu/FilterMenu";

const App = () => {
  /**
   * Toggle FilterMenu drop down
   * Change styling of filtermenu button when toggled on
   */
  const [filterMenuToggle, setFilterMenuToggle] = useState(false);
  const [buttonState, setButtonState] = useState("");
  
  const handleFilterClick = () => {
    setFilterMenuToggle(!filterMenuToggle);
    buttonState === ""
    ? setButtonState("--selected")
    : setButtonState("");
  };

  /**
   * Select a tag
   */
  const [selectedTag, setSelectedTag] = useState("");
  const handleTagClick = (tag:string) => {
    selectedTag === tag
    ? setSelectedTag("")
    : setSelectedTag(tag)
  }
  
  return (
    <>
      <Header filterClick={handleFilterClick} buttonState={buttonState}/>
      <main className="main">
        {filterMenuToggle ? <FilterMenu handleTagClick={handleTagClick} selectedTag={selectedTag}/> : null}
        <Hero />
        <PhotoGallery />
      </main>
      <Footer />
    </>
  );
};

export default App;
