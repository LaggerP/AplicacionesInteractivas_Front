import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './LandingNavbar/LandingNavbar'
import Button from '@material-ui/core/Button';
import './LandingHeader.scss'

export default class Header extends Component {
   render() {
      return (
         <div className="header">
            <Navbar></Navbar>
            <div className="header-body">
               <div className="header-body--title">
                  <h1>¡Es momento de aprender!</h1>
                  <Button variant="contained" color="secondary" component={Link} to="/login">¡Quiero jugar!</Button>
               </div>

            </div>

         </div>
      )
   }
}