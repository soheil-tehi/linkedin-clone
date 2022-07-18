import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login';
import './App.css';
//ROUTER DOM 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from 'react';
//actions
import { getUserAuth } from './redux/actions'
import { requirePropFactory } from '@material-ui/core';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
    props.getUserAuth()
  }, [])
// test git
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/home' >
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
