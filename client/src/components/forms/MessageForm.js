import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class MessageForm extends Component {
  state = {
    message: "",
    disabled: true
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      disabled: !Boolean(e.target.value)
    });
  }

  handleSubmit = (e) => {
    this.props.onSubmit(e, this.state.message);

    this.setState({ message: "" });
  }

  render = () => {
    return (
      <Col>
        <Form>
          <FormGroup>
            <Input type="text" placeholder="Drop a message for blockchain :)" value={this.state.message} onChange={this.handleChange} />
          </FormGroup>

          <Button disabled = {this.state.disabled} color="primary" onClick={this.handleSubmit}>
            Send message
          </Button>
        </Form>
      </Col>
    );
  }
}

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default MessageForm;
