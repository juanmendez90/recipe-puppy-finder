import React from 'react';

import SearchBar from '../../../components/SearchBar';
import List from '../../../components/List';

import styles from '../home.scss';

const Home = ({ recipeActions, recipeState }) => (
  <div className={styles.container}>
    <SearchBar onChange={recipeActions.recipeActions} />
    <List data={recipeState.recipes} />
  </div>
);

export default Home;
