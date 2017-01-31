import React , { PropTypes } from 'react';
import classnames from 'classnames';

import './star-panel.css';

const _handleTapped = e => {};

/**
 * App Card shows an app link with a launch button
 * (HTML)
 */
const StarPanel = ({
  active
}) => {

  return (
    <div
      className={ classnames('star-panel', { 'star-panel--active': active }) }
      onTapped={ _handleTapped } />
  );
};

StarPanel.defaultProps = {
  active: false
};

StarPanel.propTypes = {
  active: PropTypes.bool
};

export default StarPanel;
