import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortingOption, sortOffers, setSortingMenuVisibility } from '../../store/action';
import { sortingOptions } from '../../const';
import { useRef, useEffect, RefObject } from 'react';

function SortingOptions(): JSX.Element {
  const activeSortingOption = useAppSelector((state) => state.activeSortingOption);
  const isSortingMenuVisible = useAppSelector((state) => state.isSortingMenuVisible);
  const dispatch = useAppDispatch();
  const noSortMenuAreaRef: RefObject<HTMLSpanElement> = useRef(null);

  useEffect(() => {
    const closeSortMenu = (evt: MouseEvent) => {
      if (!noSortMenuAreaRef.current || !(evt.target instanceof HTMLElement)) {
        return;
      }

      if (!noSortMenuAreaRef.current.contains(evt.target) && isSortingMenuVisible) {
        dispatch(setSortingMenuVisibility());
      }
    };

    document.addEventListener('click', closeSortMenu);

    return () => {
      document.removeEventListener('click', closeSortMenu);
    };
  }, [dispatch, isSortingMenuVisible]);

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
        ref={noSortMenuAreaRef}
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
