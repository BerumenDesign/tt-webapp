import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const TtList = () => (
  <Paper zDepth={1}>
    <Subheader inset={false}>Tickets</Subheader>
    <List style={{padding:'0 1em 1em 1em'}}>
      <ListItem primaryText="New" leftIcon={<ContentInbox />} />
      <Divider />
      <Subheader inset={false}>In progress</Subheader>
      <ListItem primaryText="Your tickets" style={{marginLeft:'2em'}}>he</ListItem>
      <ListItem primaryText="@John Smith" style={{marginLeft:'2em'}}/>
      <ListItem primaryText="@Jane Smith" style={{marginLeft:'2em'}}/>
      <Divider />
      <ListItem primaryText="Processed" leftIcon={<ContentInbox />} />
    </List>
  </Paper>
);

export default TtList;
