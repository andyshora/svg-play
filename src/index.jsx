import React from 'react';
import ReactDOM from 'react-dom';

// Components
// import Hills from 'components/hills';
import Paths from 'components/paths';

import './styles/index.css';
/**
 * Our main application
 */
const App = () => <Paths />;

ReactDOM.render(<App />, document.getElementById('root'));
