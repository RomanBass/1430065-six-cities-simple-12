import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function SigningArea(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          </div>
        </li>
        <li className="header__nav-item">
          <Link
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
            className="header__nav-link"
            to={AppRoute.Root}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    );

  }
}

export default SigningArea;
