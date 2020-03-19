import React from 'react';

import { Panel, Placeholder } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const panelStyles = {
  marginBottom: '10px'
};

const PlaceholderPanels = ({ rows }) => (
  <div>
    <Panel bordered style={panelStyles}>
      <Placeholder.Paragraph rows={rows} active />
    </Panel>
    <Panel bordered style={panelStyles}>
      <Placeholder.Paragraph rows={rows} active />
    </Panel>
    <Panel bordered style={panelStyles}>
      <Placeholder.Paragraph rows={rows} active />
    </Panel>
    <Panel bordered style={panelStyles}>
      <Placeholder.Paragraph rows={rows} active />
    </Panel>
    <Panel bordered style={panelStyles}>
      <Placeholder.Paragraph rows={rows} active />
    </Panel>
  </div>
);

export default PlaceholderPanels;