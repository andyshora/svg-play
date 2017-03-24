// Imports

import React from 'react';
import MorphSVGPlugin from 'gsap/plugins/MorphSVGPlugin';
import _ from 'lodash';

import perlin from 'perlin-noise';
// import _ from 'lodash';
// import chroma from 'chroma-js';

import './paths.css';

const timeMultiplier = 1; // how many lengths of the screen width make up the x axis
const hillsLength = 10000;
const duration = 10;
const noise = perlin.generatePerlinNoise(hillsLength, 1, { octaveCount: 7, persistence: 0.5 });
let percent = { x: 0 };
const transitionBox = true;

/**
 * paths
 */
const Paths = React.createClass({
  displayName: 'Paths',
  getInitialState() {
    return {
      width: 1000,
      height: window.innerHeight
    };
  },
  componentDidMount() {
    const { width, height } = this.state;
    this._motionPath = MorphSVGPlugin.pathDataToBezier(this._path, { align: 'relative' });

    if (transitionBox) {
      // transition viewbox
      this._svgTween = TweenMax.to(
        this._svg,
        1,
        {
         attr: { viewBox: `${width} 0 ${width} ${height}` },
         ease: Linear.easeNone,
         paused: true
        }
      );
    }

    // tween a percentage marker - this sync both tweens in the _onUpdate function
    this._baseTween = TweenMax.to(percent, duration, { x: 100, delay: 0, repeat: -1, ease: Linear.easeNone, onUpdate: this._onUpdate });

  },
  _onUpdate() {
    // this._circleTween.progress(percent.x / 100).pause();
    if (transitionBox) {
      this._svgTween.progress(percent.x / 100).pause();
    }
    TweenMax.set(this._path, { drawSVG: `${percent.x}%` });
  },
  _handleTweenUpdated(e) {
    console.log(e);
  },
  _getHills({ startX, startY, maxWidth, maxHeight }) {

    const xPerStep = maxWidth * (timeMultiplier + +transitionBox) / noise.length;

    const arr = _.map(noise, (n, i) => {
      const val = n - 0.5;
      return i
        ? `L ${startX + (xPerStep * i)} ${startY - (val * maxHeight)}`
        : `M ${startX} ${startY - (val * maxHeight)}`;
    });

    return arr.join(' ');
  },
  _handleButtonClicked() {
    console.log('this._baseTween', this._baseTween);
    const paused = this._baseTween.paused();

    if (paused) {
      this._baseTween.resume();
    } else {
      this._baseTween.pause();
    }
  },
  /**
   * render - render the component
   * @return {ReactElement} markup
   */
  render() {
    const { width, height } = this.state;
    const cx = width / 2;
    const cy = height * 0.5;
    const hills = this._getHills({ startX: 0, startY: cy, maxWidth: width, maxHeight: height / 2 });
    const pathData = `${hills}`;
    return (
      <div className='paths'>
        <svg
          ref={svg => { this._svg = svg; }}
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}>
          <g>
            <circle fill='none' ref={circle => { this._circle = circle; }} r={5} cx={10} cy={cy} />
            <path
              id='path'
              stroke='url(#linear)'
              ref={path => { this._path = path; }}
              d={pathData} />
          </g>
          <defs>
            <linearGradient id='linear' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%'   stopColor='lime'/>
              <stop offset='100%' stopColor='red'/>
            </linearGradient>
          </defs>
        </svg>
        <button onClick={this._handleButtonClicked}>Pause</button>
      </div>
    );
  }
});

export default Paths;
