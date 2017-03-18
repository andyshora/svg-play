const perlin = require('perlin-noise');
const assert = require('assert');

module.exports = {
  getNoise({ width, height, options }) {
    assert.ok(width.length < 9999);
    assert.ok(height.length < 9999);
    return perlin.generatePerlinNoise(width, height, options);
  }
};
