import React from 'react';

import BarChart from '@rsuite/charts/lib/charts/BarChart';
import YAxis from '@rsuite/charts/lib/components/YAxis';
import Bars from '@rsuite/charts/lib/series/Bars';

import { generateAxisLabel, checkMinimumInterval } from '../../utils/compute-data.utils';
import { colors } from '../../utils/other.utils';

const BarChartComponent = ({ territory, data }) =>(
  <BarChart name={`${territory.country} statistics`} data={data} >
  <YAxis axisLabel={value => generateAxisLabel(value, territory)} minInterval={checkMinimumInterval(territory)} />
  <Bars color={colors} label={({ value }) => value}/>
</BarChart>
);

export default BarChartComponent