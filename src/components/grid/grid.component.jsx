import React from 'react';

import { Grid, Col, Row } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const GridComponent = ({ size, children }) => (
  <Grid fluid>
    <Row>
      <Col xs={size}>
        {children}
      </Col>
    </Row>
  </Grid>
);

export default GridComponent;