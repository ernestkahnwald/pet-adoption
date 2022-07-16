import PetCategorySelector from '../PetCategorySelector/PetCategorySelector';
import { withDisplayName } from 'src/common/components/utils/wrappers';

function PetCategorySearch (props) {
  function handleSearchChange(e) {
    props.handleSearchChange(e.target.value);
  }

  function handleSearchFocus() {
    props.handleSearchFocus();
  }

  function handleSearchBlur() {
    props.handleSearchBlur();
  }

  function handleCategoryChange(category) {
    props.handleCategoryChange(category);
  }

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
