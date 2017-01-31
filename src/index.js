import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import AppCard from './components/app-card/app-card';

// Mock data
import data from './data/apps.json';

import './styles/index.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h2>QB Apps</h2>
        <div className='app-grid'>
          { _.map(data.apps, (d, i) => {
            return <AppCard key={ d.id } title={ d.name } locked={ d.mfa.status === 'verify' } />
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
