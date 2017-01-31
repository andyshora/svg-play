import React , { PropTypes } from 'react';
import classnames from 'classnames';

// Components
import StarPanel from '../star-panel/star-panel';
import Button from '../button/button';

import './app-card.css';

/**
 * App Card shows an app link with a launch button
 * (HTML)
 */
const AppCard = ({
  icon,
  locked,
  title
}) => {

  return (
    <div className={ classnames('app-card', { 'app-card--locked': locked }) }>
      <h4>{ title }</h4>
      <div className='app-card__icon'>{ icon }</div>
      <Button type='primary' onTapped={ () => {} } size='medium' label='Launch' />
    </div>
  );
};

AppCard.defaultProps = {
  icon: 'default.png',
  locked: false
};

AppCard.propTypes = {
  icon: PropTypes.string,
  locked: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default AppCard;
