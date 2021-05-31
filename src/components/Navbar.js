import React, { Component } from 'react';
import './Navbar.css';
import logo from './logo.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img src={logo} className="logo" alt="My logo"/></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })} */}
                    
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/News">News</Nav.Link>
                    <Nav.Link href="/Events">Events</Nav.Link>
                    <Nav.Link href="/Services">Services</Nav.Link>
                    <Nav.Link href="/Contact">Contact Us</Nav.Link>
                    <Nav.Link href="/LogIn">LogIn</Nav.Link>

                </ul>
                {/* <Button>Sign Up</Button> */}
            </nav>
        )
    }
}

export default Navbar