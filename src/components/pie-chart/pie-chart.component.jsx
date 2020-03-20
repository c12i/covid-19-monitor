import React from 'react';

import PieChart from '@rsuite/charts/lib/charts/PieChart';

import 'rsuite/dist/styles/rsuite-default.css';

const PieChartComponent = ({ data }) => {
  return (
    <div>
      <PieChart
        name='Statistics'
        data={data}
        legend={false}
        startAngle={180}
      />
    </div>
  )
};

export default PieChartComponent;