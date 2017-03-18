import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Hills from 'components/hills';

/**
 * Our main application
 */
const App = () => <Hills />;

ReactDOM.render(<App />, document.getElementById('root'));
