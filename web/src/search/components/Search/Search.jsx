import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import PetCategorySearch from '../PetCategorySearch/PetCategorySearch';
import LocationInput from 'src/common/components/location/LocationInput';

export default function () {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [categorySelectorOpened, setCategorySelectorOpened] = useState(false);

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  function handleSearchFocus() {
    if (!categorySelectorOpened) {
      setCategorySelectorOpened(true);
    }
  }

  function handleSearchBlur() {
    if (categorySelectorOpened) {
      setCategorySelectorOpened(false);
    }
  }

  const navigate = useNavigate();

  function toPet() {
    navigate('/pet');
  }

  return (
    <div style={{display: 'flex'}}>
      <div>
        <PetCategorySearch
          search={search}
          category={category}
          categorySelectorOpened={categorySelectorOpened}
          handleSearchChange={handleSearchChange}
          handleSearchFocus={handleSearchFocus}
          handleSearchBlur={handleSearchBlur}
          handleCategoryChange={handleCategoryChange}
        />
      </div>

      <div>
        <LocationInput />
      </div>

      {/*<Link to="/pet">To pet</Link>*/}
      <button onClick={toPet}>To pet</button>
    </div>
  );
};
