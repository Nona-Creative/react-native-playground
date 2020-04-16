const blacklist = require('metro-config/src/defaults/blacklist') // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  resolver: {
    blacklistRE: blacklist([
      /android\/.*/,
      /ios\/.*/,
    ]),
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx']
  },
}
