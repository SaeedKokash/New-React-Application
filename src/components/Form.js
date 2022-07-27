import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

class ModalForm extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         hornsNumber: this.props.animalData.horns
    //     }
    // }
    
    
    // handleChange = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     // this.setState({
    //     //     hornsNumber: hornsNumber.filter(value => )
    //     // })

    // }

    

    render() {
        return (
            <Form.Select aria-label="Default select example" onChange={this.handleChange}>
                <option>Select Number of Horns to View</option>
                <option value="0">Show All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">More than 3</option>
            </Form.Select>
        )
    }
}

export default ModalForm;