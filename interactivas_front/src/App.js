import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Login from './components/Auth/Login/Login';
import Ranking from './components/MenuJuegos/Ranking/Ranking';
import MenuJuegos from './components/MenuJuegos/MenuJuegos'
import Monedas from './components/MenuJuegos/MathGames/Monedas/Monedas'
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/auth/login" component={Login} />
        <ProtectedRoute exact path="/ranking" component={Ranking}/>
        <ProtectedRoute exact path="/games" component={MenuJuegos} />
          <ProtectedRoute exact path="/games/monedas" component={Monedas} />
        <Route path="*" component={()=>"404 not Found"}/>
      </Switch>

    </div>
  );
}

export default App;
