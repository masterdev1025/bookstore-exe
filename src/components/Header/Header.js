import React from 'react';
import './Header.css';
class Header extends React.Component {
    render() {
        return (
            <div className="app-header app-container">
                <div className="app-content">
                    <div className="app-logo">BookStore</div>
                </div>
            </div>
        )

    }
}

export default Header;