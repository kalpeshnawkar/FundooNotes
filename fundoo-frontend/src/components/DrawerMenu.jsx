import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core'

// const drawerWidth = 240;

const theme = createMuiTheme({
  overrides:
  {
    MuiDrawerpaper107: 
      { paper: { 
        top: 106, width: 270,
       },
      paperAnchorDockedLeft:
        { borderRight: "white" }
    }
  }
})
const styles = theme =>
  ({
    menuItem:
    {
      borderRadius: "0 25px 25px 0",
      '&:focus':
      {
        backgroundColor: "#fff9c4",
        borderRadius: "0 25px 25px 0",
        '& $primary, & $icon':
        {
          color: theme.palette.common.white,
        },
      },
    }, drawerHeader: {
      display: 'flex', alignItems: 'center',

    }
  }
  );

class PersistentDrawerLeft extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      // typoGraphy: 'KEEP'
    };
  }

  // handleRemainders = () => {
  //   this.setState({ typoGraphy: 'Remainders' });
  // };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.props.appbarprops}
          classes={{
            paper: classes.drawerPaper,
          }}
        >


          <List>
            {['Notes'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <List>
            {['Reminders'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <label className="labelsDrawer">labels</label>
          <List>
            {['Edit Label'].map((text, index) => (
              <ListItem button key={text}>

                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Archive', 'Trash'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          {this.state.typoGraphy}
        </Typography>

      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(theme, { withTheme: true })(PersistentDrawerLeft);
