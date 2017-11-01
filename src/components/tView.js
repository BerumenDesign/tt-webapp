import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton';
import Chat from 'material-ui/svg-icons/communication/chat';
import ExitToApp from 'material-ui/svg-icons/communication/chat';
import Person from 'material-ui/svg-icons/social/person';
import Done from 'material-ui/svg-icons/action/done';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TtCard from './tCard';
import SvgCustomIcon from './tIcon';
import {white} from 'material-ui/styles/colors';

const wrapper = {
  display: 'flex',
  flexFlow: 'row wrap',
  height: '80vh'
};

const appBarStyle = {
  backgroundColor: '#00345C',
  marginBottom: '1em'
};

const floatRight = {
  display: 'flex',
  alignItems: 'flex-end'
};
const trasnButton = {
    alignItems: 'flex-end',
    margin: '.5em 2em',
};
const listLabel = {
  fontSize: '.75em',
  display: 'block',
  marginTop: '20px'
};

const listOfTickets = {
  padding: '1em',
  display: 'block',
  background: '#5490BE',
  color: 'white',
  borderRadius: 0,
  height: '87vh'
};
const cardColumn = {
  margin: 0,
  padding: '0 10px 0 0',
  borderRadius: 0,
};
const ticketCardList = {
  overflowY: 'auto',
  overflowX: 'hidden',
  height: '81vh',
  background: '#BBDBF4'
};
const ticketInfoPanel = {
  padding: '1em',
  height: '60vh',
  backgroundColor: '#777196',
  color: 'white'
};
const whiteIcon = {
  color: 'white'
};
const tabStyle = {
  backgroundColor: 'white',
  color: '#666',
  borderRadius: '0'
};
const ticketChat = {
  padding: '1em',
  height: '60vh',
  backgroundColor: '#F8F8F8',
  lineHeight: '1.5em',
  color: '#666',
};
const buttonsChat = {
  padding: '1em',
  width: '100%',
  textAlign: 'right'
};
const repChat = {
  padding: '1em',
  background: '#EEECF7',
};
const titleChat = {
  fontSize:'.85em',
  color: '#666',
};
const timeStampChat = {
  position: 'relative',
  fontStyle: 'italic',
  float: 'right',
  borderRadius: 0
};
const custChat = {
  padding: '1em',
  background: 'white',
};
const custTitleChat = {
  fontSize:'.85em',
  color: '#2B9CFE',
};

const TtView = () => (<div>
        {/* App Bar */}
  <AppBar title="Trouble Ticket" style={appBarStyle}
    iconElementLeft={<IconButton><SvgCustomIcon/></IconButton>}
    iconElementRight={<IconButton><ExitToApp style={whiteIcon}/></IconButton>}/>

  <Grid style={wrapper}>
    <Row>
      {/* List of tickets */}
      <Col xs={3} style={listOfTickets}>
        Tickets
        <Menu>
          <MenuItem primaryText="New" secondaryText="4" leftIcon={<Feedback color={white} />} style={whiteIcon} />
                    <Divider/>
          <MenuItem primaryText="In progress" secondaryText="8" style={whiteIcon} />
          <MenuItem primaryText="@You" secondaryText="2" leftIcon={<Person color={white} />} style={whiteIcon}/>
          <MenuItem primaryText="@John Smith" secondaryText="1" leftIcon={<Chat color={white} />} style={whiteIcon}/>
          <MenuItem primaryText="@Jane Smith" secondaryText="2" leftIcon={<Chat color={white} />} style={whiteIcon}/>
          <MenuItem primaryText="@Jordan Smith" secondaryText="3" leftIcon={<Chat color={white} />} style={whiteIcon}/>
          <Divider/>
          <MenuItem primaryText="Processed" secondaryText="2" leftIcon={<Done color={white} />} style={whiteIcon}/>
        </Menu>
      </Col>

      {/* List of selected tickes in card format */}

      <Col xs={3} style={cardColumn}>
        <Paper>
          <Subheader inset={false}>New tickets</Subheader>
          <div style={ticketCardList}>
            {/* These are the tickets listed */}
            <TtCard/>
            <TtCard/>
            <TtCard/>
            <TtCard/>
          </div>
        </Paper>
      </Col>

      {/* View of the ticket in progress */}

      <Col xs={6}>
        <Paper >
          <Grid>
            {/* Header of in progess ticket */}
            <Row>
              <Col xs={12} style={{
                  display: 'flex'
                }}>
                <Subheader inset={false}>Your tickets in progress</Subheader>
                <FlatButton style={trasnButton} label="Transfer"/>
              </Col>
            </Row>
            {/* Header of in progess ticket */}

            <Row>
              <Col xs={12}>
                <Tabs>
                  <Tab label="LeBron James" style={tabStyle} inkBarStyle={{background: 'blue'}}>
                    <Row>
                      <Col xs={4} style={ticketInfoPanel}>
                        Ticket ID 89329-01
                        <span style={listLabel}>Duration</span>
                        00:05:00
                        <Divider style={{
                            marginTop: '1em'
                          }}/>
                        <span style={listLabel}>SSID</span>
                        SHAW-C598E0-EXT
                        <span style={listLabel}>Frequency</span>
                        2412
                        <span style={listLabel}>dBM</span>
                        -55
                        <Divider style={{
                            marginTop: '1em'
                          }}/>
                        <span style={listLabel}>Name</span>
                        LeBron James
                        <span style={listLabel}>Email</span>
                        leb@james.com
                        <span style={listLabel}>SSID</span>
                        +1 403=966-3323
                        <span style={listLabel}>Device</span>
                        Samsung (Android 24)
                      </Col>
                      <Col xs={8} style={ticketChat}>
                        <div style={repChat}>
                          <div style={titleChat}>You
                          <span style={timeStampChat}>3 m ago</span></div>
                          <div>Hello, I am sorry to hear that, when was the last time it happened?</div>
                        </div>
                        <div style={custChat}>
                          <div style={custTitleChat}>You
                          <span style={timeStampChat}>3 m ago</span></div>
                          <div>Hello, I am sorry to hear that, when was the last time it happened?</div>
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab label="Kyrie Irving" style={tabStyle}>
                    <div>
                      <p>
                        This is another in progress conversation.
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
            {/* Rows fopr text field and buttons */}
            <Row>
              <Col xs={12} >
                <TextField hintText="Type message" fullWidth={true}/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} style={buttonsChat}>
                <RaisedButton label="Send" primary={true}/>
                <FlatButton label="Mark as resolved"/>
              </Col>
            </Row>

          </Grid>
        </Paper>
      </Col>
    </Row>
  </Grid>

</div>);

export default TtView;
