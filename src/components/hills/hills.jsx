// Imports

import React from 'react';
import perlin from 'perlin-noise';
import _ from 'lodash';
import chroma from 'chroma-js';

import './hills.css';

const generateColor = chroma.scale(['rgb(0, 0, 155)', 'rgb(59, 198, 255)', 'rgb(0, 165, 38)']);
/**
 * hills
 */
const Hills = React.createClass({
  displayName: 'Hills',
  getInitialState() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  componentDidMount() {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const context = this._canvas.getContext('2d');
    const backingStoreRatio = context.webkitBackingStorePixelRatio
      || context.mozBackingStorePixelRatio
      || context.msBackingStorePixelRatio
      || context.oBackingStorePixelRatio
      || context.backingStorePixelRatio
      || 1;

    const ratio = devicePixelRatio / backingStoreRatio;
    context.scale(ratio, ratio);
  },
  _handleGenerateClick() {
    const { width, height } = this.state;
    const noise = perlin.generatePerlinNoise(width, height, { octaveCount: 7, persistence: 0.5 });
    this._paint(noise);
  },
  _paint(noise) {
    const context = this._canvas.getContext('2d');
    const { width, height } = this.state;
    context.clearRect(0, 0, width, height);

    _.forEach(noise, (n, i) => {
      const x = i % width;
      const y = Math.floor(i / width);
      context.fillStyle = generateColor(n);
      context.fillRect(x, y, 1, 1);
    });
  },
  /**
   * render - render the component
   * @return {ReactElement} markup
   */
  render() {
    const { width, height } = this.state;
    return (
      <div>
        <canvas
          ref={canvas => { this._canvas = canvas; }}
          className='hills'
          onClick={this._handleGenerateClick}
          style={{ width: `${width}px`, height: `${height}px` }} />
      </div>
    );
  }
});

export default Hills;
