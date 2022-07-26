import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class SelectedBeast extends React.Component {

    


    render() {
        return (
            <div>

                <Button variant="primary" onClick={this.props.title1}>
                    Launch demo modal
                </Button>

                <Modal show={this.show} onHide={this.Close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.Close}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.Close}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    };
}

export default SelectedBeast