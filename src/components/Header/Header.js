import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <div className="app-header app-container">
                <div className="app-content app-header-content">
                    <div className="app-logo">
                        <NavLink href="/">BookStore</NavLink>
                    </div>
                    <Nav>
                        <NavItem>
                            <NavLink href="/book">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/book/add">Add</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink disabled href="#">LogIn</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        )

    }
}

export default Header;