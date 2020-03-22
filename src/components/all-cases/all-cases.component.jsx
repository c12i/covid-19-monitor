import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Panel, Divider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { AllCasesContainer, Key } from './all-cases.styles';

import { selectAll } from '../../redux/all/all.selectors';

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
        <small>Updated on {formatedDate.toString()}</small>
      </AllCasesContainer>
    </Panel>
  )
};

const mapStateToProps = createStructuredSelector({
  all: selectAll
});

export default connect(mapStateToProps)(AllCases);