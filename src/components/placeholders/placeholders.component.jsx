import React from 'react';

import { Panel, Placeholder } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const panelStyles = {
  marginBottom: '10px'
};

const PlaceholderPanels = () => (
  <div>
    <Panel bordered style={panelStyles}>
      <Placeholder.Paragraph rows={6} active />
    </Panel>
    <Panel bordered style={panelStyles}>
      <Placeholder.Paragraph rows={6} active />
    </Panel>
    <Panel bordered style={panelStyles}>
      <Placeholder.Paragraph rows={6} active />
    </Panel>
    <Panel bordered style={panelStyles}>
      <Placeholder.Paragraph rows={6} active />
    </Panel>
  </div>
);

export default PlaceholderPanels;