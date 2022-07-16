import React, { MouseEventHandler } from 'react';

import PetCategorySelector from '../PetCategorySelector/PetCategorySelector';
import { withDisplayName } from 'src/common/components/utils/wrappers';

interface Props {
  search: string;
  categorySelectorOpened: boolean;
  category: string;
  handleSearchChange: Function;
  handleSearchFocus: Function;
  handleSearchBlur: Function;
  handleCategoryChange: (category: string) => void;
}

const PetCategorySearch: React.FC<Props> = (props) => {
  const handleSearchChange = (e: any) => props.handleSearchChange(e.target.value);
  const handleSearchFocus = props.handleSearchFocus as MouseEventHandler;
  const handleCategoryChange = (category: string) => props.handleCategoryChange(category);

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
