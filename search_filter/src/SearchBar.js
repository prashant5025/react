import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({posts, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(posts)

        const results = posts.filter((post) => {
            return post.title.includes(e.target.value) || post.body.includes(e.target.value)
        })

        setSearchResults(results)
    }
  return (
    <header>
        <form className="search" onSubmit={handleSubmit}>
            <input type="text" className="search__input" id="search" onChange={handleSearchChange} />
            <button className="search__button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    </header>
  );
};

export default SearchBar;
