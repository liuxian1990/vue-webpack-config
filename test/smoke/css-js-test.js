/* eslint-disable no-undef */
const glob = require('glob-all');

describe('Checking generated js css files', () => {
  it('should generate js css files', (done) => {
    const files = glob.sync([
      './dist/bundle_*.js',
      './dist/main_*.css',
    ]);
    if (files.length > 0) {
      done();
    } else {
      throw new Error('no js css files generated');
    }
  });
});
