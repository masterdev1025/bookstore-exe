import React from 'react';
import './Filter.css';
class Filter extends React.Component {
    render() {
        return (
            <div className="app-container book-filter__container">
                <div className=" app-content">
                    <div className="title">Search to find your new book</div>
                    <div className="sub-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="search-bar">
                        <svg className="icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        <input className="search-input" placeholder="Search..." value={this.props.searchTxt} onChange={e => { this.props.searchTxtHandleChange(e.target.value) }} />
                    </div>
                    <div className="search-filter mt-2 p-2">
                        <div className="row">
                            <div className="col-md-3 form-group">
                                <label>Category</label>
                                <select className="form-control">
                                    <option>All</option>
                                </select>
                            </div>
                            <div className="col-md-3 form-group">
                                <label>Publisher</label>
                                <select className="form-control" onChange={(e) => this.props.filterPublisherHandeChange(e.target.value)}>
                                    <option>All</option>
                                    <option>O'Reilly Media</option>
                                    <option>Independently published</option>
                                    <option>No Starch Press</option>
                                </select>
                            </div>
                            <div className="col-md-3 form-group">
                                <label>Popularity</label>
                                <select className="form-control">
                                    <option>All</option>
                                </select>
                            </div>
                            <div className="col-md-3 form-group">
                                <label>Year</label>
                                <select className="form-control">
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Filter;