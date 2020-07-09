import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
      this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) return <Preloader />;
    
    return (
      <div className="app_wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app_wrapper_content">
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route path='/profile/:userId?'  render={ () => <ProfileContainer /> }/>
          <Route path='/news' render={ () => <News/> }/>
          <Route path='/music' render={ () => <Music/> }/>
          <Route path='/users' render={ () => <UsersContainer /> }/>
          <Route path='/settings' render={ () => <Settings/> }/>
          <Route path='/login' render={ () => <Login /> }/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, {initializeApp})(App);
