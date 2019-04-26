
import React,{Component}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import{ AppBar,Card} from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase'
 import DrawerMenu from './DrawerMenu'
 import AccountProfile from './accountProfile'
 import GridView from './GridView'
//import { fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 240;

const styles =theme=>( {
  root: {
    flexGrow: 3,
    marginBottom: 85
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


class Appbar extends Component {
  constructor(props){
  super(props);
  this.state = {
    open:false
    
  };
  this.handleGridView = this.handleGridView.bind(this);
}

  
  handleToggle=()=>{
    this.setState({
        open:!this.state.open
    })
  }
  handleGridView(){
    this.props.dashboardToApp()
  }

 render()  {
  const { classes } = this.props;
  
   
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"  >
          <MenuIcon onClick={this.handleToggle}></MenuIcon>
         
          
          </IconButton>
            <div className="appSearchDiv" >
              <Card className="appSearchCard">
              <IconButton>
                <div className="appSearchIcon">
                <SearchIcon />
                </div>
                </IconButton>
              
              
              <InputBase className="appSearch"
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              
              </Card>
            </div>
            <GridView GridViewToApp={this.handleGridView}/>
                <div className="accountProfile"
                >
          <IconButton className
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountProfile />
              </IconButton>
              </div>
        </Toolbar>
        <DrawerMenu
            appbarprops={this.state.open}
        />
      </AppBar>
      
      
    </div>
  );
}
}

Appbar.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appbar);