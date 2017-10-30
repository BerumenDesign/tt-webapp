import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TtAppBar from './tAppBar';
import TtList from './tList';
import TtTable from './tTable';

const tDashboard = () => (
  <div style={{padding:'0', margin:'0'}}>
    <TtAppBar />
    <Grid fluid>
      <Row>
        <Col xs={12} md={3}>
          <TtList />
        </Col>
        <Col xs={12} md={9}>
          <TtTable />
        </Col>
      </Row>
    </Grid>

</div>
);

export default tDashboard;
