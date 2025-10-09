import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/img/logo.png';
import avatar from '../../assets/img/avatar.png';

const Header = ({ isAuth, authProfile, login, makeLogout }) => {
  const handleLogout = () => {
    makeLogout();
  };

  const userAvatar = authProfile?.photos?.small || avatar;
  const displayName = login || 'User';

  return (
    <header className={styles.header}>
      <NavLink 
        to="/profile" 
        className={styles.logoLink}
        aria-label="Go to profile"
      >
        <img 
          className={styles.logo} 
          src={logo} 
          alt="Company Logo" 
        />
      </NavLink>

      <div className={styles.authSection}>
        {isAuth ? (
          <div className={styles.userMenu}>
            <NavLink 
              to={`/profile/${authProfile?.userId}`}
              className={styles.userProfileLink}
            >
              <img 
                src={userAvatar} 
                alt={displayName}
                className={styles.avatar}
                onError={(e) => {
                  e.target.src = avatar;
                }}
              />
              <span className={styles.userName}>
                {displayName}
              </span>
            </NavLink>
            
            <button 
              onClick={handleLogout}
              className={styles.logoutButton}
              type="button"
              aria-label="Log out"
            >
              <span className={styles.logoutText}>LogOut</span>
              <span className={styles.logoutIcon}>→</span>
            </button>
          </div>
        ) : (
          <NavLink 
            to="/login"
            className={styles.loginLink}
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;