import React, { Component } from 'react';
import { render } from 'react-dom';

import GitHubRepos from './GitHubRepos';
import './styles.css';

const App = () =>
  <div>
    <h1>Popular GitHub Javascript Repositories</h1>
    <GitHubRepos />
  </div>;

render(<App />, document.getElementById('root'));
