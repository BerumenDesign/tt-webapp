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
import Feedback from 'material-ui/svg-icons/communication/chat';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import Person from 'material-ui/svg-icons/social/person';
import Done from 'material-ui/svg-icons/action/done';
import Timer from 'material-ui/svg-icons/image/timer';
import TtCard from './tCard';
import SvgCustomIcon from './tIcon';
import {white, blue900, blue700, blue400, blue200, blue50, indigo500, indigo200, amber100, green500, grey900, grey700, grey500, grey400, grey200, cyan100, cyan50, orangeA700
} from 'material-ui/styles/colors';

const wrapper = {
  display: 'flex',
  flexFlow: 'row wrap',
  height: '80vh'
};

const appBarStyle = {
  backgroundColor: grey900,
  marginBottom: '1em'
};
const listLabel = {
  fontSize: '.75em',
  display: 'block',
  marginTop: '20px'
};

const listOfTickets = {
  padding: '1em',
  display: 'block',
  background: white,
  color: grey700,
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
  background: cyan50,
};
const ticketInfoPanel = {
  padding: '1em',
  height: '60vh',
  backgroundColor: cyan100,
  color: grey700
};
const chatDivider = {
  color: white,
  borderTop: '1px solid white',
  marginTop: '1em',
};
const Active = {
  color: blue700
};
const whiteIcon = {
  color: white
};
const ListIcon = {
  color: grey700,
  width: '1em',
  marginBottom: '-.5em'
};
const tabStyle = {
  backgroundColor: 'white',
  color: '#666',
  borderRadius: '0'
};
const ticketChat = {
  padding: '1em',
  height: '60vh',
  backgroundColor: cyan50,
  lineHeight: '1.5em',
  color: '#666',
};
const buttonsChat = {
  padding: '1em',
  width: '100%',
};
const repChat = {
  padding: '1em',
  background: amber100,
};
const titleChat = {
  fontSize:'.85em',
  color: orangeA700,
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
    iconElementRight={<IconButton><ExitToApp style={whiteIcon}/></IconButton>}/>

  <Grid style={wrapper}>
    <Row>
      {/* List of tickets */}
      <Col xs={3} style={listOfTickets}>
        Tickets
        <Menu>
          <MenuItem primaryText="New" secondaryText="4" leftIcon={<Feedback color={blue700} />} style={Active} />
                    <Divider/>
          <MenuItem primaryText="In progress" secondaryText="8" />
          <MenuItem primaryText="@You" secondaryText="2" leftIcon={<Person color={green500} />} />
          <MenuItem primaryText="@John Smith" secondaryText="1" leftIcon={<Person color={green500} />} />
          <MenuItem primaryText="@Jane Smith" secondaryText="2" leftIcon={<Person color={green500} />} />
          <MenuItem primaryText="@Jordan Smith" secondaryText="0" leftIcon={<Person color={grey400} />} />
          <Divider/>
          <MenuItem primaryText="Processed" secondaryText="2" leftIcon={<Done color={blue700} />}/>
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
              </Col>
            </Row>
            {/* Header of in progess ticket */}

            <Row>
              <Col xs={12}>
                <Tabs>
                  <Tab label="I cannot connect LTE" style={tabStyle}>
                    <Row>
                      <Col xs={4} style={ticketInfoPanel}>
                        Ticket ID 89329-01
                        <span style={listLabel}>Duration</span>
                        <Timer style={ListIcon}/> 00:05:00
                        <Divider style={chatDivider}/>
                        <span style={listLabel}>SSID</span>
                        SHAW-C598E0-EXT
                        <span style={listLabel}>Frequency</span>
                        2412
                        <span style={listLabel}>dBM</span>
                        -55
                        <Divider style={chatDivider}/>
                        <span style={listLabel}>Name</span>
                        LeBron James
                        <FlatButton fullWidth={true}>OPEN IN USER EXPLORER</FlatButton>
                        <span style={listLabel}>Email</span>
                        leb@james.com
                        <span style={listLabel}>SSID</span>
                        +1 403=966-3323
                        <span style={listLabel}>Device</span>
                        Samsung (Android 24)
                      </Col>
                      <Col xs={8} style={ticketChat}>
                        <div style={custChat}>
                          <div style={custTitleChat}>John Smith
                          <span style={timeStampChat}>3 m ago</span></div>
                          <div>Hey my LTE connection is no bueno, why?</div>
                        </div>
                        <div style={repChat}>
                          <div style={titleChat}>You
                          <span style={timeStampChat}>Just now</span></div>
                          <div>Hello, I am sorry to hear that, when was the last time it happened?</div>
                        </div>

                      </Col>
                    </Row>
                  </Tab>
                  <Tab label="The coverage in my area is terrible" style={tabStyle} >
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
              <Col xs={9} style={buttonsChat}>
                <TextField hintText="Type message" fullWidth={true} style={{textAlign:'center'}}/>
              </Col>
              <Col xs={3} style={buttonsChat}>
                <RaisedButton label="Send" primary={true}/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} style={buttonsChat}>
                <FlatButton > TRANSFER</FlatButton>
                <FlatButton  label="Mark as resolved"/>

              </Col>
            </Row>

          </Grid>
        </Paper>
      </Col>
    </Row>
  </Grid>

</div>);

export default TtView;
