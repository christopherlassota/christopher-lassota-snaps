import "./FilterMenu.scss";
import tagsData from "../../data/tags.json";
import { useState } from "react";

interface filterMenuProps {
  toggleFilterMenu: string;
}

const FilterMenu = ({ toggleFilterMenu }: filterMenuProps) => {
  /**
   * Create an Array of Boolean values for each tag to track its selection status
   * Start with useState([false,false,false])
   */

  const [selected, setSelected] = useState<boolean[]>(
    new Array(tagsData.length).fill(false)
  );

  const handleTagClick = (index: number) => {
    setSelected((prevSelected) =>
      prevSelected.map((isSelected, i) =>
        i === index ? !isSelected : isSelected
      )
    );
  };

  return (
    <section className={toggleFilterMenu}>
      <h2 className="filter__title">Filters</h2>
      <ul className="filter__tag-list">
        {tagsData.map((tag, index) => (
          <li
            onClick={() => handleTagClick(index)}
            key={index}
            className={
              selected[index] ? "filter__tag filter__tag--selected" : "filter__tag"
            }
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterMenu;
