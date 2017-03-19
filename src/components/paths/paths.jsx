// Imports

import React from 'react';
// import perlin from 'perlin-noise';
// import _ from 'lodash';
// import chroma from 'chroma-js';

import './paths.css';

/**
 * paths
 */
const Paths = React.createClass({
  displayName: 'Paths',
  getInitialState() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  componentDidMount() {
     this._motionPath = MorphSVGPlugin.pathDataToBezier('#path');
     console.log('this._motionPath', this._motionPath);
  },
  /**
   * render - render the component
   * @return {ReactElement} markup
   */
  render() {
    const { width, height } = this.state;
    const cx = width / 2;
    const cy = height / 2;
    return (
      <div className='paths'>
        <svg
          ref={svg => { this._svg = svg; }}
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}>
          <path id='path' ref={path => { this._path = path; }} d={`M 10 ${cy} h ${width - 10}`} />
          <circle r={'10'} cx={10} cy={cy} />
        </svg>
      </div>
    );
  }
});

export default Paths;
