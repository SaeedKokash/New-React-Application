import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                
            }
            console.log(this.props);
        }

    render() {
        return (

            <Modal className="modal" show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className="modalImg" src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title} width="auto"/>
                    {this.props.selectedBeast.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    };
}

export default SelectedBeast