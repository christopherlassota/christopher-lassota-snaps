import "./FilterMenu.scss";
import tagsData from "../../data/tags.json";

interface FilterMenuProps {
  handleTagClick: (tag: string) => void;
  selectedTag: string;
}

const FilterMenu = ({ handleTagClick, selectedTag }: FilterMenuProps) => {
  return (
    <section className="filter">
      <h2 className="filter__title">Filters</h2>
      <ul className="filter__tag-list">
        {tagsData.map((tag, index) => {
          let isSelectedTag: boolean = tag === selectedTag;
          return (
            <li
              onClick={() => {
                handleTagClick(tag);
              }}
              key={index}
              className={`filter__tag ${
                isSelectedTag ? `filter__tag--selected` : ""
              }`}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FilterMenu;
