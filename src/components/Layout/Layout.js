import React from 'react';
import styles from './Layout.css';
import Header from './Header';

const Layout = ({ children, location }) => {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
