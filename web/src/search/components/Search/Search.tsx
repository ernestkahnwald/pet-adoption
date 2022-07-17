import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PetCategorySearch from '../PetCategorySearch/PetCategorySearch';
import LocationInput from 'src/common/components/location/LocationInput';

export default function Search(): React.ReactElement {
  const navigate = useNavigate();

  const [category, setCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [categorySelectorOpened, setCategorySelectorOpened] = useState(false);

  const handleSearchChange = (newSearch: string) => setSearch(newSearch);
  const handleCategoryChange = (newCategory: string) => setCategory(newCategory);

  const handleSearchFocus = () => {
    if (!categorySelectorOpened) {
      setCategorySelectorOpened(true);
    }
  }

  const handleSearchBlur = () => {
    if (categorySelectorOpened) {
      setCategorySelectorOpened(false);
    }
  }

  const toPet = () => navigate('/pet');

  return (
    <div style={{ display: 'flex' }}>
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
}
