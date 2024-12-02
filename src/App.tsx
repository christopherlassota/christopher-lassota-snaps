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
  const handleFilterClick = () => {
    setFilterMenuToggle(!filterMenuToggle);
  };

  /**
   * Select a tag
   */
  const [selectedTag, setSelectedTag] = useState("");
  const handleTagClick = (tag: string) => {
    selectedTag === tag ? setSelectedTag("") : setSelectedTag(tag);
  };

  return (
    <>
      <Header
        filterClick={handleFilterClick}
        filterMenuToggle={filterMenuToggle}
      />
      <main className="main">
          {filterMenuToggle ? (
            <section className="main__filter">
              <FilterMenu
                handleTagClick={handleTagClick}
                selectedTag={selectedTag}
              />
            </section>
          ) : null}
        <section className="main__content">
          <Hero />
          <PhotoGallery selectedTag={selectedTag} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
