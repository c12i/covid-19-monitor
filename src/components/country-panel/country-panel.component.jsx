import React from 'react';

import { Panel, Icon, Whisper, Tooltip } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Key } from './country-panel.styles';

import { getKey } from '../../utils/get-key.utils';


const CountryPanel = ({ country, cases, deaths, recovered, active, todayCases, todayDeaths }) => {
  const caseTooltip = (
    <Tooltip>
      <i>{ todayCases } today</i>
    </Tooltip>
  ); 
  
  const deathTooltip = (
    <Tooltip>
      <i>{ todayDeaths } today</i>
    </Tooltip>
  );

  return (
  <Panel style={{ marginBottom: '10px' }} key={getKey(country)} bordered>
    <h3>{country}</h3>
    <p>
      <Key>Cases</Key>: {cases} { todayCases > 0 ? 
      <Whisper placement='right' trigger='hover' speaker={caseTooltip}>
        <Icon icon='angle-double-up' style={{color:'green', cursor:'pointer'}} />
      </Whisper>  : null }
    </p>
    <p>
      <Key>Deaths</Key>: {deaths} { todayDeaths > 0 ?  
      <Whisper placement='right' trigger='hover' speaker={deathTooltip}>
        <Icon icon='angle-double-up' style={{color:'green', cursor:'pointer'}} /> 
      </Whisper> : null }
    </p>
    <p>
      <Key>Recovered</Key>: {recovered}
    </p>
    <p>
      <Key>Active</Key>: {active}
    </p>
  </Panel>
)};

export default CountryPanel;