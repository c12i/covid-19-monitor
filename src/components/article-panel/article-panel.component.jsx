import React from 'react';

import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const ArticlePanel = ({ country, cases, deaths, recovered, active }) => (
  <Panel style={{ marginBottom: '10px' }} key={country} bordered>
      {/* TODO */}
  </Panel>
);

export default ArticlePanel;