const React = require('react');
const ReactDOM = require('react-dom');

import './styles/index.css';

class App extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
