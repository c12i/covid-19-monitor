import React from 'react';

import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Key } from './country-panel.styles';

import { getKey } from '../../utils/get-key.utils';

const CountryPanel = ({ country, cases, deaths, recovered, active }) => (
  <Panel style={{ marginBottom: '10px' }} key={getKey(country)} bordered>
    <h3>{country}</h3>
    <p><Key>Cases</Key>: {cases}</p>
    <p><Key>Deaths</Key>: {deaths}</p>
    <p><Key>Recovered</Key>: {recovered}</p>
    <p><Key>Active</Key>: {active}</p>
  </Panel>
);

export default CountryPanel;