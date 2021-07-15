import React from 'react';
import Filter from './components/Filter/Filter';
import Content from './components/Content/Content';
import { books } from '../../../fakeData.json';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTxt: '',
            filterPublisher: 'All',
            books: books
        };
    }
    getBooks = async (params) => {
        // const response = fetch('getting books url');
        // this.setState({
        //     books: response.books
        // })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchTxt !== prevState.searchTxt) {
            //Fetch Api to get books data with search param;

            //getBooks( { searchTxt: this.state.searchTxt } );
        }
    }
    handleChangeSearchText = (text) => {
        this.setState({
            searchTxt: text
        })
    }
    handleChangeFilterPublisher = (pub) => {
        this.setState({
            filterPublisher: pub
        })
    }
    render() {
        return (
            <>
                <Filter
                    searchTxtHandleChange={(text) => this.handleChangeSearchText(text)}
                    filterPublisherHandeChange={(pub) => this.handleChangeFilterPublisher(pub)}
                />
                <Content
                    searchTxt={this.state.searchTxt}
                    filterPublisher={this.state.filterPublisher}
                />
            </>
        )
    }
}

export default Main;