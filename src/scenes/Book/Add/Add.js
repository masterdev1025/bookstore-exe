import React from 'react';
import AddForm from './AddForm';
import './Add.css';
class Add extends React.Component {
    render() {
        return (
            <>
                <div className="app-container add-book__header">
                    <div className="app-content">
                        <h3>Add New Book</h3>
                    </div>
                </div>
                <div className="app-container ">
                    <div className="app-content">
                        <AddForm />
                    </div>
                </div>
            </>
        )
    }
}

export default Add;