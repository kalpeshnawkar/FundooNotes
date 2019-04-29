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
  constructor(props){
    super(props)
  this.state = {
    open: false,
  };
  this.handleLaterTodayReminder=this.handleLaterTodayReminder.bind(this)
  this.handleTomorrowReminder=this.handleTomorrowReminder.bind(this)
  this.handleWeeklyReminder=this.handleWeeklyReminder.bind(this)
}

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };
  handleLaterTodayReminder=()=>{
    var setAMPM=parseInt(new Date().getHours())>=8 ?"PM":"AM"
    var date=new Date().toDateString();
    var reminder=date+" 8:00 "+setAMPM;
    console.log("reminder=",reminder)
    this.props.reminder(reminder)
  };
  handleTomorrowReminder=()=>{
    try{
    let days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon"]
    var date = new Date().toDateString();
    date=date.replace(new Date().getDate().toString(),new Date().getDate()+1);
    date=date.replace(days[new Date().getDay()-1],days[new Date().getDay()]);
    var reminder= date+ ", 8 AM" ;
    console.log("tommorow reminder==",reminder);
    this.props.reminder(reminder)
    }
    catch(err){
        console.log("error in set reminder for tommorrow");
    }
}
handleWeeklyReminder=()=>{
    try{
   
    var date = new Date().toDateString();
    date=date.replace((new Date().getDate()),(new Date().getDate()+7));
    var reminder = date+ ", 8 AM" ;
    console.log("weekly reminder==",reminder);
    this.props.reminder(reminder)
    }
    catch(err){
        console.log("error in set reminder for next week");
    }
}


  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const setAMPM=this.props.setAMPM;
    console.log("setAMPM in reminder==",setAMPM)


    return (
      <div className={classes.root}>
        <div>
           <Tooltip
            title="Add"
           >
            <img buttonRef={node => {
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
                      <MenuItem  onClick={this.handleLaterTodayReminder} className="accoutMenuItem">
                        <div>Later Today</div>
                        <div>8:00 {setAMPM}</div>
                      </MenuItem>
                      <MenuItem onClick={this.handleTomorrowReminder} className="accoutMenuItem" >
                        <div>Tommarow</div>
                        <div>8:00 </div>
                      </MenuItem>
                      <MenuItem onClick={this.handleWeeklyReminder} className="accoutMenuItem" >
                        <div>Next Week</div>

                        <div>Mon, 8:00 </div>
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
