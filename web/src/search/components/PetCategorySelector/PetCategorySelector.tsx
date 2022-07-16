/**
 * Show categories based on search name.
 */
import React, { ReactElement } from 'react';

interface Props {
  search: string;
  value: any;
  onChange: (category: any) => void;
}

export default function PetCategorySelector(props: Props): ReactElement {
  const handleChangeCategory = (e: any) => props.onChange(e.target.value);

  return (
    <div>
      <select value={props.value} onChange={handleChangeCategory}>
        <option>Cat</option>
        <option>Dog</option>
        <option>Large cats</option>
      </select>
    </div>
  );
}
