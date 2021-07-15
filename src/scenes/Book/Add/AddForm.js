import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import ImageUploader from '../../../components/ImageUploader';
class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newBooks: [
                {
                    "isbn": "",
                    "title": "",
                    "subtitle": "",
                    "author": "",
                    "published": "",
                    "publisher": "",
                    "pages": 0,
                    "description": "",
                    "website": "",
                    "image": ""
                }
            ]
        }
    }
    addBook = () => {
        this.setState({
            newBooks: [
                ...this.state.newBooks,
                {
                    "isbn": "",
                    "title": "",
                    "subtitle": "",
                    "author": "",
                    "published": "",
                    "publisher": "",
                    "pages": 0,
                    "description": "",
                    "website": "",
                    "image": ""
                }
            ]
        })
    }
    render() {
        return (
            <>
                {
                    this.state.newBooks && this.state.newBooks.map((book, index) => (
                        <div key={`new_book_${index}`} className="new-book__item">
                            <Row>
                                <Col sm={9}>
                                    <FormGroup>
                                        <Label >Title</Label>
                                        <Input placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >Description</Label>
                                        <Input placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >Categories</Label>
                                        <Input placeholder="" />
                                    </FormGroup>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label >Author Name:</Label>
                                                <Input placeholder="" />
                                            </FormGroup></Col>
                                        <Col>
                                            <FormGroup>
                                                <Label >Publisher:</Label>
                                                <Input placeholder="" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col> <FormGroup>
                                            <Label >Year:</Label>
                                            <Input placeholder="" />
                                        </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label >Page Numbers</Label>
                                                <Input placeholder="" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label >Options:</Label>
                                                <Input placeholder="" />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label >Rating:</Label>
                                                <Input placeholder="" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3}>
                                    <FormGroup>
                                        <Label>Image</Label>
                                        <ImageUploader
                                            style={{
                                                position: 'relative',
                                                width: '100%',
                                                height: 'auto',
                                                minHeight: '250px',
                                                borderWidth: '2px',
                                                borderColor: 'rgb(102, 102, 102)',
                                                borderStyle: 'dashed',
                                                borderRadius: '5px'
                                            }}
                                        />
                                    </FormGroup>


                                    <FormGroup>
                                        <Label >ISBN-10:</Label>
                                        <Input placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >ISBN-13:</Label>
                                        <Input placeholder="" />
                                    </FormGroup>
                                </Col>
                            </Row>

                        </div>
                    ))
                }
                <Button color="primary" onClick={this.addBook}>+ADD</Button>
            </>
        )
    }
}

export default AddForm;