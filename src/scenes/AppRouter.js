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
    render() {
        return (
            <div style={{ minHeight: '800px' }}>
                <Router>
                    <Switch>
                        <Route path="/book" exact render={props => <Main {...props} />} />
                        <Route path="/book/add" exact render={props => <Add {...props} />} />
                        <Redirect to="/book" />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default AppRouter;