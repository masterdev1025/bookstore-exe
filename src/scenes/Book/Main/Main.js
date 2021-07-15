import React from 'react';
import Filter from './components/Filter/Filter';
import Content from './components/Content/Content';
class Main extends React.Component {
    render() {
        return (
            <>
                <Filter />
                <Content />
            </>
        )
    }
}

export default Main;