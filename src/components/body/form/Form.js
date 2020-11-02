import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import './form.css'
export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            show: false
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        if (this.ValidateEmail(this.state.email) && (this.state.name.trim() !== "")) {
            alert("Thank you for contacting us – we will get back to you soon!")
        }
    }

    handleEmailCh = (evt) => {
        this.setState({
            ...this.state,
            email: evt.target.value
        })
    }

    handleNameCh = (evt) => {
        this.setState({
            ...this.state,
            name: evt.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.target.checkValidity() !== false) {
            this.setState({
                ...this.state,
                show: true
            })
        }

        e.target.classList.add("was-validated");
    }

    handleClose = () => {
        this.setState({
            ...this.state,
            show: false
        })
    }
    render() {
        return (
            <div>
                <form className=" p-0 needs-validation" noValidate onSubmit={this.handleSubmit}>
                    <div className=" mb-3">
                        <div className="input-group-prepend">
                        </div>
                        <input
                            onChange={this.handleNameCh}
                            type="text"
                            className="form-control mt-5 col-md-12"
                            id="validationCustomUsername"
                            placeholder="Name"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <div className="invalid-feedback">Please enter a name.</div>
                    </div>
                    <div className=" mb-3">
                        <div className="input-group-prepend">
                        </div>
                        <input
                            onChange={this.handleEmailCh}
                            type="email"
                            className="form-control mt-2 col-md-12"
                            id="validationCustomUsername"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <div className="invalid-feedback">Please enter a valid email.</div>
                    </div>

                    <div className="text-right mt-4 mb-4 ">
                        <button className="btn mb-1 m-md-1 subbutt col-md-1 col-12" type="submit">
                            Submit
                        </button>
                        <button className="btn mb-1 m-md-1 savebutt col-md-1 col-12">
                            Save
                        </button>
                    </div>

                </form>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>successfully submitted</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Thank you for contacting us – we will get back to you soon!
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

