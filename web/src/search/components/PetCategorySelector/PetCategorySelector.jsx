/**
 * Show categories based on search name.
 */

export default function PetCategorySelector(props) {
  function handleChangeCategory(e) {
    props.onChange(e.target.value);
  }

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
