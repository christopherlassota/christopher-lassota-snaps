import { useState, useEffect } from "react";
import axios from "axios";
import "./FilterMenu.scss";

interface FilterMenuProps {
  handleTagClick: (tag: string) => void;
  selectedTag: string;
}

const FilterMenu = ({ handleTagClick, selectedTag }: FilterMenuProps) => {
  const [tagsData, setTagsData] = useState([]);
  useEffect(()=>{
    const fetchTagsData = async () => {
      try {
        const response = await axios.get('https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=a90b1dab-b8ae-4277-9879-c9bcfe3201c3')
        setTagsData(response.data)
      } catch (error) {
        console.log("Failed to fetch tagsdata", error)
      }
    }
    fetchTagsData()
  })

  return (
    <section className="filter">
      <h3 className="filter__title">Filters</h3>
      <ul className="filter__tag-list">
        {tagsData.map((tag, index) => {
          // Determine if current tag is the selected tag
          let isSelectedTag: boolean = tag === selectedTag;
          return (
            <li
              onClick={() => {
                handleTagClick(tag);
              }}
              key={index}
              // Add selected class if tag is selected
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
