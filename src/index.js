import React from 'react';
import ReactDOM from 'react-dom';

import 'modern-normalize/modern-normalize.css';
import './index.css';

import { Container } from 'Components/Container';
import { App } from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root'),
);
