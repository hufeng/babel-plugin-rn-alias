const alias = require('../lib');
const babel = require('babel-core');

const example = `
import React from 'react';
import ReactNative from 'react-native';
import * as plume2 from 'plume2'
`;

it('origin code', () => {
  expect(example).toMatchSnapshot();
});

it('match-snapshot', () => {
  const { code } = babel.transform(example, {
    plugins: [
      [
        alias,
        {
          alias: {
            react: 'qm-react',
            'react-native': 'qm-react-native',
            plume2: 'qm-plume2'
          }
        }
      ]
    ]
  });

  expect(code).toMatchSnapshot();
});
