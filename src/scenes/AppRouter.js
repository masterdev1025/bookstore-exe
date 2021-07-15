import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Main from './Book/Main';
import Add from './Book/Add';
class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app-container">
                <div className="app-content">
                    <Router>
                        <Switch>
                            <Route path="/book" exact render={props => <Main {...props} />} />
                            <Route path="/book/add" exact render={props => <Add {...props} />} />
                            <Redirect to="/book" />
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}

export default AppRouter;