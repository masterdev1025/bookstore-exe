import React from 'react';
import './BookCard.css';
import { FaRegStar } from 'react-icons/fa';
class BookCard extends React.Component {
    render() {
        return (
            <div className="product-card">
                <div className="badge">New</div>
                <div className="product-tumb" style={{ backgroundImage: 'url(' + this.props.image + ')', backgroundSize: 'cover' }}>
                </div>
                <div className="product-details">
                    <span className="product-catagory">{this.props.title}</span>
                    <div className="product-bottom-details">
                        <div className="product-price">
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookCard;