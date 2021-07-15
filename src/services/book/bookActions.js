import { createActions } from 'redux-actions';

const {
    getBooks,
    getBooksSucceed,
    getBooksFailed,
    addBook,
    addBookSucceed,
    addBookFailed
} = createActions({
    GET_BOOKS: params => ({ params }),
    GET_BOOKS_SUCCEED: books => ({ books }),
    GET_BOOKS_FAILED: error => ({ error }),
    ADD_BOOK: params => ({ params }),
    ADD_BOOK_SUCCEED: book => ({ book }),
    ADD_BOOK_FAILED: error => ({ error })
});

export {
    getBooks,
    getBooksSucceed,
    getBooksFailed,
    addBook,
    addBookSucceed,
    addBookFailed
};
