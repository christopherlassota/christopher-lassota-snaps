import "./FilterMenu.scss";
import tagsData from "../../data/tags.json";



const FilterMenu = () => {

  return (
    <section className="filter">
      <h2 className="filter__title">Filters</h2>
      <ul className="filter__tag-list">
        {tagsData.map((tag, index) => (
          <li
            key={index}
            className="filter__tag"
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterMenu;
