import "./FilterMenu.scss";
import tagsData from "../../data/tags.json";

interface filterMenuProps {
  toggleFilterMenu: string;
}

const FilterMenu = ({ toggleFilterMenu }: filterMenuProps) => {
  return (
    <section className={toggleFilterMenu}>
      <h2 className="filter__title">Filters</h2>
      <ul className="filter__tag-list">
        {tagsData.map((tag, index) => (
          <li key={index} className="filter__tag">
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterMenu;
