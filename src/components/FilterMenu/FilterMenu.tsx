import "./FilterMenu.scss";
import tagsData from "../../data/tags.json";

interface FilterMenuProps {
  handleTagClick: (tag:string) => void;
  selectedTag: string;
}
           
// selectedTag === tag ? filter__tag--selected : ""

const FilterMenu = ({ handleTagClick, selectedTag }: FilterMenuProps) => {
  return (
    <section className="filter">
      <h2 className="filter__title">Filters</h2>
      <ul className="filter__tag-list">
        {tagsData.map((tag, index) => (
          <li
            onClick={() => {
              handleTagClick(tag);
            }}
            key={index}
            className={selectedTag === tag ? "filter__tag filter__tag--selected" : "filter__tag"}
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterMenu;
