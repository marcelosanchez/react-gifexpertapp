import React from 'react';
import ReactDOM from 'react-dom';

import GifExpertApp from './GifExpertApp'
import './styles/index.css';
import './styles/_gifExpertApp.css';

import './styles/components/_addCategory.css';
import './styles/components/_gifGrid.css';
import './styles/components/_gifGridItem.css';

ReactDOM.render(
  <GifExpertApp />,
  document.getElementById('root')
);
