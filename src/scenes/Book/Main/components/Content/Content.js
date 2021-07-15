import React from 'react';
import BookCard from '../../../../../components/BookCard/BookCard';
import { books } from '../../../../../fakeData.json';
import './Content.css';
class Content extends React.Component {
    render() {
        return (
            <div className="app-container">
                <div className="row mt-5 app-content">
                    {
                        books && books.filter(book => {
                            var result = true;
                            if (this.props.searchTxt) {
                                if (book.title.toLocaleLowerCase().includes(this.props.searchTxt.toLocaleLowerCase()) || book.description.toLocaleLowerCase().includes(this.props.searchTxt.toLocaleLowerCase())) result = true;
                                else result = false;
                            }
                            if (this.props.filterPublisher !== 'All' && this.props.filterPublisher !== book.publisher) {
                                result = false;
                            }
                            return result;
                        }).map((item, index) => (
                            <div className="col-md-3 mb-3" key={`book_card-${index}`} >
                                <BookCard
                                    title={item.title}
                                    image={item.image}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Content;