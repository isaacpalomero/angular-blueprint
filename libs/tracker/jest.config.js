module.exports = {
  name: 'tracker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/tracker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
