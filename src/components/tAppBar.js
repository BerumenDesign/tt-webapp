import React from 'react';
import AppBar from 'material-ui/AppBar';

const TtAppBar = () => (
  <AppBar
    title="Trouble Ticket"
    style={{backgroundColor:'#000', marginBottom: '1em'}}
    showMenuIconButton= {false}
  />
);

export default TtAppBar;
