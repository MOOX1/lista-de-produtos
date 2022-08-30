import React, { useState } from "react";

const Search = (props) => {

  return (
    <div className="Search">
    <div>
      <input onChange={props.onChange} placeholder="PESQUISE" type="text" />
    </div>
    </div>
  );
};

export default Search;
