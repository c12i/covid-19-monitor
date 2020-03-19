import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { AllCasesContainer, Key } from  './all-cases.styles';

import { selectAll } from '../../redux/all/all.selectors';

const AllCases = ({ all }) => {
	const { cases, deaths, recovered, updated } = all;
	const formatedDate = new Date(updated)
	const date = formatedDate.toDateString();
	return (
		
		<Panel bordered>
			<AllCasesContainer>
				<h4><Key>Cases</Key>: {cases}</h4>
				<h4><Key>Deaths</Key>: {deaths}</h4>
				<h4><Key>Recovered</Key>: {recovered}</h4>
				<h4><Key>Updated</Key>: {date}</h4>
			</AllCasesContainer>
  	</Panel>
	)
};

const mapStateToProps = createStructuredSelector({
	all: selectAll
});

export default connect(mapStateToProps)(AllCases);