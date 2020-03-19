import React from 'react';

import {  Placeholder, Loader } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const LoaderComponent = ({ rows, children, spinner }) => (
  <Placeholder.Paragraph rows={rows} active>

    {
      spinner ? <Loader size="lg" center vertical content={children} /> : null
    }
  </Placeholder.Paragraph>
);

export default LoaderComponent;
