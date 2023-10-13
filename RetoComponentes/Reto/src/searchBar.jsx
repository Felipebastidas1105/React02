import React from 'react';

const SearchBar = () => {
  return (
    <div className='header'>
    <div className="container mt-3 ">
      <div className="input-group">
      
        <input
          type="text"
          className="form-control ml-3"
          placeholder="Buscar..."
        />
        <div className="input-group-append">
          <button className="btn btn-primary m-1" type="button">
            Buscar
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchBar;

