import React from "react";
import Form from 'react-bootstrap/Form';

class ModalForm extends React.Component {

    filterData = (e) => {
        this.props.hornFilter(e)
    }

    render() {
        return (
            <Form.Select className= "filterForm" aria-label="Default select example" onChange={this.filterData}>
                <option value="">Show All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">More Than Three</option>
            </Form.Select>
        )
    }
}

export default ModalForm;