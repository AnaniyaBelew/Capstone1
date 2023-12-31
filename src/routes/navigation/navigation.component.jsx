import { Fragment,useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';
import { UserContext } from '../../contexts/usercontext';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
const Navigation = () => {
  const {currentUser}=useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          { currentUser ? (
              <span className='nav-link' onClick={SignOutUser}>Sign Out</span>
          ):(
            <Link className='nav-link' to='/auth'>
            SIGN IN/UP
          </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
