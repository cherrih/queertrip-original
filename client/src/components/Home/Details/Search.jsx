import React from 'react';

const Search = (props) => {
  return (
    <div id="search-form-container">
      <form id="search-form" onSubmit={props.handleSubmit}>
        <input type="text" placeholder="I'm traveling to . . ." id="search-searchbar"/>
        <input type="submit" value="GO" id="search-submit"/>
      </form>
    </div>
  )
}

export default Search;