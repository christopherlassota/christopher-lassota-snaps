import { useState } from "react";
import FilterMenu from "../FilterMenu/FilterMenu";
import "./Header.scss";

const Header = () => {
  const [buttonPressed, setButtonPressed] = useState("header__button");
  const [filtersColor, setFiltersColor] = useState("header__filters");
  const [pathColor, setPathColor] = useState("header__path");
  const [toggleFilterMenu, setToggleFilterMenu] = useState("filter");
  const handleFitlerMenu = () => {
    toggleFilterMenu === "filter"
      ? setToggleFilterMenu("filter filter--toggle")
      : setToggleFilterMenu("filter");

    buttonPressed === "header__button"
      ? setButtonPressed("header__button header__button--selected")
      : setButtonPressed("header__button");

    filtersColor === "header__filters"
      ? setFiltersColor("header__filters header__filters--selected")
      : setFiltersColor("header__filters")

    pathColor === "header__path"
      ? setPathColor('header__path header__path--selected')
      : setPathColor('header__path')
  };

  return (
    <header className="header">
      <section className="header__container">
        <h1 className="header__title">Snaps</h1>
        <div onClick={handleFitlerMenu} className={buttonPressed}>
          <p className={filtersColor}>Filters</p>
          <svg
            className="header__svg"
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={pathColor}
              d="M6.66667 10.5H8.33333C8.79167 10.5 9.16667 10.125 9.16667 9.66667C9.16667 9.20833 8.79167 8.83333 8.33333 8.83333H6.66667C6.20833 8.83333 5.83333 9.20833 5.83333 9.66667C5.83333 10.125 6.20833 10.5 6.66667 10.5ZM0 1.33333C0 1.79167 0.375 2.16667 0.833333 2.16667H14.1667C14.625 2.16667 15 1.79167 15 1.33333C15 0.875 14.625 0.5 14.1667 0.5H0.833333C0.375 0.5 0 0.875 0 1.33333ZM3.33333 6.33333H11.6667C12.125 6.33333 12.5 5.95833 12.5 5.5C12.5 5.04167 12.125 4.66667 11.6667 4.66667H3.33333C2.875 4.66667 2.5 5.04167 2.5 5.5C2.5 5.95833 2.875 6.33333 3.33333 6.33333Z"
              fill="#1E6655"
            />
          </svg>
        </div>
      </section>
      <FilterMenu toggleFilterMenu={toggleFilterMenu} />
    </header>
  );
};

export default Header;
7;
