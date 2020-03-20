import React from 'react';

import { Placeholder, Loader, Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const LoaderComponent = ({ rows, children, spinner }) => (
  <Panel bordered>
    <Placeholder.Paragraph rows={rows} active>
      {
        spinner ? <Loader size="lg" center vertical content={children} /> : null
      }
    </Placeholder.Paragraph>
  </Panel>
);

export default LoaderComponent;
