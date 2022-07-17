import React from 'react';

import PetCategorySelector from '../PetCategorySelector/PetCategorySelector';
import { withDisplayName } from 'src/common/components/utils/wrappers';
import { InputEvent } from 'src/common/components/shortcuts';

interface Props {
  search: string;
  categorySelectorOpened: boolean;
  category: string;

  handleSearchChange: (value: string) => void;
  handleSearchFocus: (e: unknown) => void;
  handleCategoryChange: (value: string) => void;
}

const PetCategorySearch: React.FC<Props> = (props) => {
  const handleSearchChange = (e: InputEvent) => props.handleSearchChange(e.currentTarget.value);
  const handleSearchFocus = props.handleSearchFocus;
  const handleCategoryChange = (newCategory: string) => props.handleCategoryChange(newCategory);

  return (
    <div>
      <input
        value={props.search}
        onChange={handleSearchChange}
        placeholder={'Find cutties pet'}
        onClick={handleSearchFocus}
      />

      {props.categorySelectorOpened &&
        <PetCategorySelector
          search={props.search}
          value={props.category}
          onChange={handleCategoryChange}
        />
      }
    </div>
  );
}

export default withDisplayName(PetCategorySearch);
