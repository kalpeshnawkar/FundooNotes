import React,{Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import{ AppBar} from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase'
 import DrawerMenu from './DrawerMenu'
//import { fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 240;

const styles =theme=>( {
  root: {
    flexGrow: 3,
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
   
});


class DashBoard extends Component {
  constructor(props){
  super(props);
  this.state = {
    anchorEl: null,
    open:false
    
  };
}

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleMenuClose=()=>{
    this.setState({anchorEl:null})
  }
  handleToggle=()=>{
    this.setState({
        open:!this.state.open
    })
  }

 render()  {
  const { classes } = this.props;
  const { anchorEl} = this.state;
  const isMenuOpen = Boolean(anchorEl);
  const renderMenu = (
    <Menu
       anchorEl={anchorEl}
       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
     open={isMenuOpen}
      onClose={this.handleMenuClose}
     >
      <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"  >
          <MenuIcon onClick={this.handleToggle}></MenuIcon>
         
          
          </IconButton>
            <div >
              
              <IconButton>
                <SearchIcon />
                </IconButton>
              
          
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>

          <IconButton className
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
        </Toolbar>
        <DrawerMenu
            appbarprops={this.state.open}
        />
      </AppBar>
      {renderMenu}
      
    </div>
  );
}
}

DashBoard.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashBoard);