import React, { Component } from 'react'
import Map from '../Map/Map'
import Login from '../Login/Login'
import LandingPage from '../LandingPage/LandingPage'
import Nav from '../Nav/Nav';
import SpotContainer from '../SpotContainer/SpotContainer';
import SpotDetails from '../SpotDetails/SpotDetails';
import AddNewSpot from '../AddNewSpot/AddNewSpot';
import GlobalStore from '../../store/GlobalStore';
import UserPage from '../UserPage/UserPage';
import { inject, observer } from 'mobx-react';
import { Route, Switch, Redirect   } from 'react-router-dom';
import Error from '../Error/Error.jsx';


@inject('GlobalStore')
@observer
class App extends Component{
  render() {
    return (
      <section className="app-container">
        <Switch>

          <Route
            exact path='/' render={ () => <Login />} />
            {GlobalStore.isFormCompleted ?
            <Route exact path='/landing' render={ () => <LandingPage /> }/> :
           <Redirect to="/" exact />}
          <Route
            exact path='/spotContainer' render={ () => <SpotContainer />} />
          <Route
            exact path='/spotDetails/:name' render={ () => <SpotDetails />}/>
          <Route
            exact path='/userPage' render={ () => <UserPage />}/>
          <Route
            exact path='/addNewSpot' render={ () => <AddNewSpot />}/>
          <Route path='*'  render ={ () => <Error />}/>
        </Switch>
        {GlobalStore.spots.length > 0 && <Nav/>}
      </section>
    )
  }
}

export default App
