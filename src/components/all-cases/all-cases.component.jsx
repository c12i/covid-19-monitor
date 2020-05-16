import React from 'react';

import { Panel, Divider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { AllCasesContainer, Key } from './all-cases.styles';

const AllCases = ({ all }) => {
  const { cases, deaths, recovered, updated } = all;
  const formatedDate = new Date(updated);
  return (
    <Panel bordered>
      <AllCasesContainer>
        <h4><Key>Cases</Key> <Divider vertical /> {cases}</h4>
        <h4><Key>Deaths</Key> <Divider vertical /> {deaths}</h4>
        <h4><Key>Recovered</Key> <Divider vertical /> {recovered}</h4>
        <br />
        <small>Updated on {formatedDate.toLocaleString()}</small>
      </AllCasesContainer>
    </Panel>
  )
};

export default AllCases;