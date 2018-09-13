import React from 'react';
import styles from './ErrorPage.css';
import Layout from '../Layout/Layout';

function ErrorPage({ location }) {
  return (
    <Layout location={location}>
      <div className={styles.normal}>
        Component: ErrorPage
    </div>
    </Layout>
  );
}

export default ErrorPage;
