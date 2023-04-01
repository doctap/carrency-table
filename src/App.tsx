import React from 'react';
import styles from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageSearchCurrency } from './components/pages';

function App () {
  return (
    <div className={styles.App}>
      <PageSearchCurrency />
    </div>
  );
}

export default App;
