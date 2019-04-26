import React from 'react';
import PropTypes from 'prop-types';
//import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles';






const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },

});

class RemindMe extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

   
  render() {
    const { classes } = this.props;
    const { open } = this.state;


    return (
      <div className={classes.root}>
        <div>


        <Tooltip
        title="Add"
      >
          <img buttonRef={node =>
           {
            this.anchorEl = node;
          }}  
          
          onClick={this.handleToggle}
           src={require("../assets/images/reminder.svg")}
           alt="reminder"
           >
           </img>
          </Tooltip>




          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper className="accountPaper">
                  <ClickAwayListener  >
                    <MenuList>

                      <MenuItem className="accoutMenuItem">Reminder</MenuItem>
                      <MenuItem className="accoutMenuItem">
                        <div>Later Today</div>
                        <div>8:00 PM</div>
                      </MenuItem>
                      <MenuItem className="accoutMenuItem" >
                        <div>Tommarow</div>
                        <div>8:00 PM</div>
                      </MenuItem>
                      <MenuItem className="accoutMenuItem" >
                        <div>Next Week</div>

                        <div>Mon, 8:00 PM</div>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

        </div>
      </div>
    );
  }
}

RemindMe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RemindMe);
