import React from 'react';
import { Route, HashRouter, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
import store from './redux/redux-store';
import { compose } from 'redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
          <Route path='/dialogs' render={ withSuspense(DialogsContainer) } />
          <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer)} />
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

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const MainApp = () => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainApp;
