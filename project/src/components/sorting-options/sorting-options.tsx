import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortingOption, sortOffers, setSortingMenuVisibility } from '../../store/action';

const sortingOptions: string[] =
['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

function SortingOptions(): JSX.Element {
  const activeSortingOption = useAppSelector((state) => state.activeSortingOption);
  const isSortingMenuVisible = useAppSelector((state) => state.isSortingMenuVisible);
  const dispatch = useAppDispatch();

  const SortingOptionsList = sortingOptions.map((option) => (
    <li key={option}
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(changeSortingOption(option));
        dispatch(sortOffers(option));
      }}
      className={`places__option ${activeSortingOption === option ? 'places__option--active' : ''}`}
      tabIndex={0}
    >{option}
    </li>
  ));


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(setSortingMenuVisibility());
        }}
        className="places__sorting-type"
        tabIndex={0}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortingMenuVisible ? 'places__options--opened' : ''}`}>
        {SortingOptionsList}
      </ul>
    </form>
  );
}

export default SortingOptions;
